import sys
import os

# Add the parent directory to the Python path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from sqlalchemy import text, select
from Backend.models import Login, Customer, Booking, Room, Price
from Backend.app_db_init import db, app
from tabulate import tabulate

#Create the database tables if they do not exist
with app.app_context():
    db.create_all()

#add a password and user
def add_user():
    with app.app_context():
        # Create a new customer
        new_customer = Customer(first_name="Puvan", last_name="test", gender="M", phone_number="0123456789", org="test")
        db.session.add(new_customer)
        db.session.commit()  # Commit to get the customer_id

        # Create a new login entry
        new_login = Login(email="puvannesan@gmail.com", password="password", auth=True, customer_id=new_customer.customer_id)
        db.session.add(new_login)
        db.session.commit()

        print(f"Added new user: {new_customer.first_name} {new_customer.last_name}")

        # Create a new room
        new_room = Room(room_name="Single Room 1", desc="Test Room Description", amenities="Test Amenities", active=True, isSingle=True)
        db.session.add(new_room)
        db.session.commit()

        new_room = Room(room_name="Single Room 2", desc="Test Room Description", amenities="Test Amenities", active=True, isSingle=True)
        db.session.add(new_room)
        db.session.commit()

        new_room = Room(room_name="Group Room 1", desc="Test Room Description", amenities="Test Amenities", active=True, isSingle=False)
        db.session.add(new_room)
        db.session.commit()

        print(f"Added new room: {new_room.room_name}")

        new_price= Price(price=20, room_type="Single Room", week_discount=0.9, month_discount=0.85)
        db.session.add(new_price)
        db.session.commit()

        new_price= Price(price=180, room_type="Group Room", week_discount=0.85, month_discount=0.8)
        db.session.add(new_price)
        db.session.commit()

        print(f"Added new prices: {new_price.room_type}")

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
            add_user()
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