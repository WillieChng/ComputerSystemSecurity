from defusedxml.ElementTree import parse
from flask_talisman import Talisman
from sqlalchemy import text
from models import Login, Customer
from app_db_init import db, app
from tabulate import tabulate
from flask import send_from_directory, request, redirect
import os
from xml.etree import ElementTree as etree

# Initialize Flask-Talisman
talisman = Talisman(app, content_security_policy=None)

# Create the database tables if they do not exist
with app.app_context():
    db.create_all()

login_list = []
customer_list = []

# Query the database
def query():
    for instance in db.session.query(Login).order_by(Login):
        user_dict = {
            "Customer_ID": instance.customer_id,
            "Username": instance.email
        }
        login_list.append(user_dict)

    for instance in db.session.query(Customer).order_by(Customer.customer_id):
        customer_dict = {
            "Customer_ID": instance.customer_id,
            "First_Name": instance.first_name,
            "Last_Name": instance.last_name,
            "Gender": instance.gender,
            "Phone_Number": instance.phone_number,
            "Organisation": instance.org
        }
        customer_list.append(customer_dict)

# Display the query results from the query()
def print_query():
    query()
    print("Users:")
    print(tabulate(login_list, headers='keys', tablefmt='pretty'))
    print("Customers:")
    print(tabulate(customer_list, headers='keys', tablefmt='pretty'))

# Serve static files
@app.route('/static/<path:filename>')
def serve_static(filename):
    return send_from_directory(os.path.join(app.root_path, 'static'), filename)

# Redirect HTTP to HTTPS
@app.before_request
def before_request():
    if not request.is_secure:
        return redirect(request.url.replace("http://", "https://", 1))

# Import the routes
from routes import api
app.register_blueprint(api)

def db_connection():
    with app.app_context():
        try:
            # Attempt to query the database
            db.session.execute(text('SELECT 1'))
            print("Database connection successful")
            print_query()
        except Exception as e:
            print(f"Database connection failed: {str(e)}")

# Securely parse XML files
def parse_xml(file_path):
    try:
        parser = etree.XMLParser(resolve_entities=False)
        tree = parse(file_path)
        root = tree.getroot()
        # Process the XML data as needed
        return root
    except Exception as e:
        print(f"Failed to parse XML: {str(e)}")
        return None

if __name__ == '__main__':
    # Create the SSL directory if it does not exist
    # os.makedirs('ssl', exist_ok=True)
    # # Run Flask on both HTTP and HTTPS ports
    # from werkzeug.serving import make_ssl_devcert
    # make_ssl_devcert('./ssl', host='127.0.0.1')
    ssl_context = ('Backend/cert.pem', 'Backend/key.pem')
    
    # Run HTTPS server
    app.run(host='127.0.0.1', port=5289, debug=True, ssl_context=ssl_context)
    
    # Run HTTP server
    app.run(host='127.0.0.1', port=5289, debug=True)