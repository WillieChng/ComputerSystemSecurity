from flask import Blueprint, jsonify, render_template, request, abort
from Backend.models import User
from functools import wraps
from dotenv import load_dotenv
import os

# Create new blueprints
api = Blueprint('api', __name__)

# Load the .env file
load_dotenv()

# Import the API key
API_KEY = os.getenv('API_KEY')

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
@api.route('/hello', methods=['GET'])
def get_data():
    return jsonify({"message": "Hello from Flask!"})

# Create a route to render the index.html homepage template (change based on html file name) (files must be stored in template)
@api.route('/')
def home():
    return "<h1>Hello</h1>"

# Create a route to handle the form submission
@api.route('/login', methods=['POST'])
def submit():
    uname = request.form['username']
    passwd = request.form['password']

    #Compare against database
    user=User.query.filter_by(username=uname).first()

    if user and user.verify_password(passwd):
        #show the homepage
        return render_template('homepage.html')
    else:
        #show the login page with an error message
        return render_template('login.html', error="Invalid username or password")
    
    
