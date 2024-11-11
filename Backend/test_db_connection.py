import sys
import os

# Add the parent directory to the Python path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from sqlalchemy import text, select
from Backend.models import Login, Customer, Booking, Room
from Backend.app_db_init import db, app
from tabulate import tabulate

#Create the database tables if they do not exist
with app.app_context():
    db.create_all()


#Query the database
def query():
    booking_list = []
    customer_list = []
    room_list = []
    
    for instance in db.session.query(Booking).order_by(Booking.customer_id):
        booking_dict = {
        "Booking_No": instance.booking_no,
        "Trans_No": instance.trans_no,
        "Pay_Method": instance.pay_method,
        "Booking_Date": instance.booking_date,
        "Booking_Start": instance.booking_start,
        "Booking_End": instance.booking_end,
        "Room_ID": instance.room_id,
        "Customer_ID": instance.customer_id,
        }
        booking_list.append(booking_dict)

    for instance in db.session.query(Customer).order_by(Customer.customer_id):
        customer_dict = {
        "Customer_ID": instance.customer_id,
        "First_Name": instance.first_name,
        "Last_Name": instance.last_name,
        "Gender": instance.gender,
        "Phone_Number": instance.phone_number,
        "E-mail": db.session.query(Login.email).filter(Login.customer_id == instance.customer_id).first()[0],
        "Organisation": instance.org
        }
        customer_list.append(customer_dict)


    for instance in db.session.query(Room).order_by(Room.room_id):
        room_dict = {
        "Room_ID": instance.room_id,
        "Room_Name": instance.room_name,
        "Room_Description": instance.desc,
        "Room_Price": instance.price,
        "Room_Amenities": instance.amenities,
        "Room_Active": instance.active
        }
        room_list.append(room_dict)

    return booking_list, customer_list, room_list

#Display the query results from the query()
def print_query():
    booking_list, customer_list, room_list = query()
    print("Bookings:")
    print(tabulate(booking_list, headers='keys', tablefmt='pretty'))
    print("Customers:")
    print(tabulate(customer_list, headers='keys', tablefmt='pretty'))
    print("Room:")
    print(tabulate(room_list, headers='keys', tablefmt='pretty'))
    

def test_db_connection():
    with app.app_context():
        try:
            # Attempt to query the database
            db.session.execute(text('SELECT 1'))
            print("Database connection successful")
            print_query()
        except Exception as e:
            print(f"Database connection failed: {str(e)}")

if __name__ == '__main__':
    test_db_connection()


# result = db.session.execute(text('SHOW DATABASES'))
            # for row in result:
            #     print(row[0])
            # db.session.execute(text('USE CSS'))
            # result = db.session.execute(text('SHOW TABLES'))
            # for row in result:
            #     print(row[0])
            # #show columns from table
            # result = db.session.execute(text('DESCRIBE customer'))
            # for row in result:
            #     print(row[0])

    # user = User(username='sample_user', password='sample_password')
    # customer = Customer(
    #     first_name='John',
    #     last_name='Doe',
    #     gender='M',
    #     phone_number=1234567890,
    #     email='john.doe@example.com',
    #     org='Sample Org'
    # )
    # db.session.add(user)
    # db.session.add(customer)
    # db.session.commit()

    # print(user)
    # print(customer)