from sqlalchemy import text
from Backend.models import User, Customer
from Backend.db_init import db, app
from tabulate import tabulate

#Create the database tables if they do not exist
with app.app_context():
    db.create_all()

#Query the database
def query():
    user = User.query.all()
    customer = Customer.query.all()
    return user, customer

#Display the query results from the query()
def print_query():
    user, customer = query()
    print("Users:")
    print(tabulate(user, headers='keys', tablefmt='pretty'))
    print("Customers:")
    print(tabulate(customer, headers='keys', tablefmt='pretty'))

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