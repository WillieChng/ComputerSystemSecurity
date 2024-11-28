from flask import Blueprint, jsonify, render_template, request, abort, session
from email_ver import send_email
from models import Login, Room, Booking, Customer, Price
from app_db_init import db
from functools import wraps
from dotenv import load_dotenv
import os
import jwt
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
        print("Request Headers:", request.headers)
        received_api_key = request.headers.get('x-apikey')
        print("Received API Key:", received_api_key)
        print("Expected API Key:", API_KEY)
        if received_api_key != API_KEY:
            abort(401)  # Unauthorized access
        return f(*args, **kwargs)
    return decorated_function

#Decorator to protect roues that require login
def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'user_id' not in session:
            return jsonify({"success": False, "message": "User not authenticated"}), 401
        return f(*args, **kwargs)
    return decorated_function

@api.route('/protected', methods=['GET'])
@login_required
def protected():
    return jsonify({"message": "This is a protected route"}), 200


# Create a route for the blueprint
@api.route('/hello', methods=['POST'])
def get_data():
    return jsonify({"message": "Hello from Flask!"})

# Create a route to render the index.html homepage template (change based on html file name) (files must be stored in template)
@api.route('/')
def home():
    return "<h1>Hello</h1>"


@api.route('/check-auth', methods=['GET'])
def check_auth():
    if 'user_id' in session:
        return jsonify({"authenticated": True}), 200
    else:
        return jsonify({"authenticated": False}), 401
    

# Create a route to handle the form submission
@api.route('/login', methods=['POST'])
def submit():
    email = request.json.get('email')
    passwd = request.json.get('password')

    #Compare against database
    login=Login.query.filter_by(email=email).first()

    if login and login.verify_password(passwd):
        session['user_id'] = login.customer_id
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
    
@api.route('/logout', methods=['POST'])
def logout():
    session.clear()
    return jsonify({"success": True}), 200

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
        return jsonify({"success": False, "message": "Missing booking information"}), 401

    slot_date = datetime.fromisoformat(slot.replace('Z', '+00:00')).date()
    booking_date = datetime.now().date()

    # Determine the date range based on the plan
    if plan == 'DAY PASS':
        start_date = slot_date
        end_date = slot_date
    elif plan == 'WEEKLY PASS (7 Days)':
        start_date = slot_date
        end_date = slot_date + timedelta(days=6)
    elif plan == 'MONTHLY PASS (30 Days)':
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
        user=session.get('user_id')
        if not user:
            return jsonify({"success": False, "message": "User not authenticated"}), 401

        new_booking = Booking(
            trans_no='TRANS123',  # To be provided by payment gateway
            pay_method='Credit Card',  # To be provided by payment gateway
            booking_date=booking_date,
            booking_start=start_date,
            booking_end=end_date,
            room_id=available_room.room_id,
            customer_id=user
        )
        db.session.add(new_booking)
        db.session.commit()

        return jsonify({"success": True, "message": "Booking successful"}), 200
    else:
        return jsonify({"success": False, "message": "No available rooms for the selected date range"}), 404
    
@api.route('/create-account', methods=['POST'])
def create_account():
    data = request.json
    first_name = data.get('firstName')
    last_name = data.get('lastName')
    gender = data.get('gender')
    phone = data.get('phone')
    org = data.get('org')
    email = data.get('email')
    password = data.get('password')

    # Check if the email already exists
    existing_user = Login.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({"success": False, "message": "Email already exists"}), 400

    # Create a new user
    new_user = Customer(
        first_name=first_name,
        last_name=last_name,
        gender=gender,
        phone_number=phone,
        org=org,
    )
    db.session.add(new_user)
    db.session.commit()

    new_login = Login(
        email=email, 
        auth=False, 
        customer_id=new_user.customer_id
    )
    new_login.password = password # Hash the password
    
    db.session.add(new_login)
    db.session.commit()
    
    # Create a new login entry
    return jsonify({"success": True, "message": "Account successfully created"}), 201

def admin_login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({"success": False, "message": "Token is missing"}), 401
        if token.startswith('Bearer '):
            token = token.split(' ')[1]
        try:
            data = jwt.decode(token, API_KEY, algorithms=['HS256'])
            current_admin = Login.query.get(data['admin_id'])
        except jwt.ExpiredSignatureError:
            return jsonify({"success": False, "message": "Token has expired"}), 401
        except jwt.InvalidTokenError:
            return jsonify({"success": False, "message": "Token is invalid"}), 401
        return f(*args, **kwargs)
    return decorated_function

@api.route('/api/admin/login', methods=['POST'])
def admin_login():
    email = request.json.get('email')
    passwd = request.json.get('password')

    # Compare against database
    admin = Login.query.filter_by(email=email, auth=True).first()

    if admin and admin.verify_password(passwd):
        token = jwt.encode({
            'admin_id': admin.customer_id,
            'exp': datetime.utcnow() + timedelta(hours=1)
        }, API_KEY, algorithm='HS256')
        return jsonify({"success": True, "token": token}), 200
    else:
        return jsonify({"success": False, "message": "Invalid credentials"}), 200

@api.route('/api/admin/check-auth', methods=['GET'])
@admin_login_required
def admin_check_auth():
        return jsonify({"authenticated": True}), 200

# Update admin-protected routes
@api.route('/api/admin/protected-route', methods=['GET'])
@admin_login_required
def admin_protected():
    return jsonify({"message": "This is a protected admin route"}), 200

@api.route('/api/admin/logout', methods=['POST'])
def admin_logout():
    return jsonify({"success": True}), 200

@api.route('/getPlans', methods=['GET'])
def get_plans():
    try:
        prices = Price.query.all()
        plans = []
        for price in prices:
            weekly_price = price.price *7 * price.week_discount 
            monthly_price = price.price * 30 * price.month_discount
            plans.append({
                "room_type": price.room_type,
                "price": price.price,
                "weekly_price": weekly_price,
                "monthly_price": monthly_price
            })
        return jsonify(plans), 200
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500