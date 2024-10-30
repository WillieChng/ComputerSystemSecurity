from flask import Blueprint, jsonify, render_template, request
from Backend.models import User

# Create new blueprints
api = Blueprint('api', __name__)

# Create a route for the blueprint
@api.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"message": "Hello from Flask!"})

# Create a route to render the index.html homepage template (change based on html file name) (files must be stored in template)
@api.route('/')
def home():
    return render_template('index.html')

# Create a route to handle the form submission
@api.route('/verifyUser', methods=['POST'])
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
    
    
