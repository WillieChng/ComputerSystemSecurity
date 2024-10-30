from sqlalchemy import text, select
from Backend.models import User, Customer
from Backend.db_init import db, app
from tabulate import tabulate

#Create the database tables if they do not exist
with app.app_context():
    db.create_all()

user_list = []
customer_list = []

#Query the database
def query():
    for instance in db.session.query(User).order_by(User.id):
        user_dict = {
        "User_ID": instance.id,
        "Username": instance.username
        }
        user_list.append(user_dict)
    
    for instance in db.session.query(Customer).order_by(Customer.customer_id):
        customer_dict = {
        "Customer_ID": instance.customer_id,
        "First_Name": instance.first_name,
        "Last_Name": instance.last_name,
        "Gender": instance.gender,
        "Phone_Number": instance.phone_number,
        "E-mail": instance.email,
        "Organisation": instance.org
        }
        customer_list.append(customer_dict)

#Display the query results from the query()
def print_query():
    query()
    print("Users:")
    print(tabulate(user_list, headers='keys', tablefmt='pretty'))
    print("Customers:")
    print(tabulate(customer_list, headers='keys', tablefmt='pretty'))

#import the routes
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

if __name__ == '__main__':
    # app.run(debug=True)
    db_connection()