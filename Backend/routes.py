from flask import Blueprint, jsonify, render_template, request, abort
from email_ver import send_email
from models import Login
from functools import wraps
from dotenv import load_dotenv
import os
import random

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
        #generate and send verification code
        code = random.randint(100000, 999999)
        if send_email():
            #store the code in memory
            verification_codes[login.email] = code
            return jsonify({"success": True}), 200
        else:
            return jsonify({"success": False, "message": "Email Verification Error"}), 501
    else:
        #show the login page with an error message
        return jsonify({"success": False, "message": "Invalid credentials"}), 200
    

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
