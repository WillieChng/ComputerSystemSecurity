from flask import Blueprint, jsonify, render_template, request, abort, session
from email_ver import send_email
from models import Login, Room, Booking
from app_db_init import db
from functools import wraps
from dotenv import load_dotenv
import os
import random
from datetime import datetime, timedelta

# Create new blueprints
api = Blueprint('api', __name__)

# Load the .env file
load_dotenv()

# Import the API key
API_KEY = os.getenv('API_KEY')

# In-memory store for verification codes
verification_codes = {}

# Decorator to require an API key (UNDER WORKS)
def require_api_key(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        received_api_key = request.headers.get('api')
        #print("Received API Key:", received_api_key)
        if received_api_key != API_KEY:
            abort(401)  # Unauthorized access
        return f(*args, **kwargs)
    return decorated_function

# Create a route for the blueprint
@api.route('/hello', methods=['POST'])
def get_data():
    return jsonify({"message": "Hello from Flask!"})

# Create a route to render the index.html homepage template (change based on html file name) (files must be stored in template)
@api.route('/')
def home():
    return "<h1>Hello</h1>"

# Create a route to handle the form submission
@api.route('/login', methods=['POST'])
def submit():
    email = request.json.get('email')
    passwd = request.json.get('password')

    #Compare against database
    login=Login.query.filter_by(email=email).first()

    if login and login.verify_password(passwd):
        return jsonify({"success": True}), 200
    else:
        #show the login page with an error message
        return jsonify({"success": False, "message": "Invalid credentials"}), 200
    
        #generate and send verification code
    #     code = random.randint(100000, 999999)
    #     if send_email():
    #         #store the code in memory
    #         verification_codes[login.email] = code
    #         return jsonify({"success": True}), 200
    #     else:
    #         return jsonify({"success": False, "message": "Email Verification Error"}), 501
    # else:
    #     #show the login page with an error message
    #     return jsonify({"success": False, "message": "Invalid credentials"}), 200
    

@api.route('/verify-code', methods=['POST'])
def verify_code():
    email = request.json.get('email')
    input_code = request.json.get('code')

    # Retrieve the code from the in-memory store
    stored_code = verification_codes.get(email)

    if stored_code and stored_code == int(input_code):
        # Verification successful
        del verification_codes[email]  
        return jsonify({"success": True, "message": "Verification successful"}), 200
    else:
        # Verification failed
        return jsonify({"success": False, "message": "Invalid verification code"}), 401

@api.route('/bookNow', methods=['POST'])
def book_now():
    data = request.json
    type = data.get('type')
    plan = data.get('plan')
    slot = data.get('slot')

    if not type or not plan or not slot:
        return jsonify({"success": False, "message": "Missing booking information"}), 400

    slot_date = datetime.strptime(slot, '%Y-%m-%dT%H:%M:%S.%fZ').date()
    booking_date = datetime.now().date()

    # Determine the date range based on the plan
    if plan == 'DAY PASS':
        start_date = slot_date
        end_date = slot_date
    elif plan == 'WEEKLY PASS':
        start_date = slot_date
        end_date = slot_date + timedelta(days=6)
    elif plan == 'MONTHLY PASS':
        start_date = slot_date
        end_date = slot_date + timedelta(days=29)
    else:
        return jsonify({"success": False, "message": "Invalid plan type"}), 400

    if type == 'pax':
        # Check for rooms with isSingle as True that do not already have a booking in the given date range
        available_room = Room.query.filter_by(isSingle=True, active=True).filter(
            ~Room.bookings.any(
                (Booking.booking_start <= end_date) & (Booking.booking_end >= start_date)
            )
        ).first()
    elif type == 'group':
        # Check for rooms with isSingle as False that do not already have a booking in the given date range
        available_room = Room.query.filter_by(isSingle=False, active=True).filter(
            ~Room.bookings.any(
                (Booking.booking_start <= end_date) & (Booking.booking_end >= start_date)
            )
        ).first()
    else:
        return jsonify({"success": False, "message": "Invalid booking type"}), 400

    if available_room:
        # Get customer_id from session
        customer_id = 1 #session.get('customer_id')
        if not customer_id:
            return jsonify({"success": False, "message": "User not authenticated"}), 401

        new_booking = Booking(
            trans_no='TRANS123',  # Example transaction number, replace with actual
            pay_method='Credit Card',  # Example payment method, replace with actual
            booking_date=booking_date,
            booking_start=start_date,
            booking_end=end_date,
            room_id=available_room.room_id,
            customer_id=customer_id
        )
        db.session.add(new_booking)
        db.session.commit()

        return jsonify({"success": True, "message": "Booking successful"}), 200
    else:
        return jsonify({"success": False, "message": "No available rooms for the selected date range"}), 404