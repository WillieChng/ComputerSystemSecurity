from .app_db_init import db
from werkzeug.security import generate_password_hash, check_password_hash

# New table for users
class Login(db.Model):
    __tablename__ = 'login'

    email = db.Column('E-mail', db.String(50), primary_key=True ,nullable=False)
    pword = db.Column(db.String(255), nullable=False)
    customer_id = db.Column('Customer_ID', db.Integer, db.ForeignKey('customer.Customer_ID'), nullable=False)


    #prevent plaintext password from being read
    @property
    def password(self):
        raise AttributeError('password is not a readable attribute')
    
    @password.setter
    def password(self, password):
        self.pword = generate_password_hash(password)

    def verify_password(self, password):  
        return check_password_hash(self.pword, password)

# Existing table for customers
class Customer(db.Model):
    __tablename__ = 'customer'

    customer_id = db.Column('Customer_ID', db.Integer, primary_key=True, nullable=False, autoincrement=True)
    first_name = db.Column('First_Name', db.String(50), nullable=False)
    last_name = db.Column('Last_Name', db.String(50), nullable=False)
    gender = db.Column('Gender', db.CHAR(1), nullable=False)
    phone_number = db.Column('Phone_Number', db.Integer, nullable=False)
    org = db.Column('Organisation', db.String(100), nullable=False)

    def __repr__(self):
        return (f"Customer\nCustomer_ID: {self.customer_id}\nFirst Name: {self.first_name}"
                f"\nLast Name: {self.last_name}\nGender: {self.gender}, Phone Number: {self.phone_number}"
                f"\nOrganization: {self.org}")

class Booking(db.Model):
    __tablename__ = 'booking'

    booking_no = db.Column('Booking_No', db.Integer, nullable=False, primary_key=True, autoincrement=True)
    trans_no = db.Column('Trans_No', db.String(100), nullable=False) #used for bank received transaction number
    pay_method = db.Column('Payment_Method', db.String(50), nullable=False)
    booking_date = db.Column('Booking_Date', db.Date, nullable=False)
    booking_start = db.Column('Booking_Start', db.Date, nullable=False)
    booking_end = db.Column('Booking_End', db.Date, nullable=False)
    room_id = db.Column('Room_ID', db.Integer, db.ForeignKey('room.Room_ID'), nullable=False)
    customer_id = db.Column('Customer_ID', db.Integer, db.ForeignKey('customer.Customer_ID'), nullable=False)
    
    
    def __repr__(self):
        return (f"Booking\nBooking No: {self.booking_no}\nTransaction No: {self.trans_no}\nPayment Method: {self.pay_method}"
                f"\nBooking Date: {self.booking_date}\nBooking Start: {self.booking_start}\nBooking End: {self.booking_end}"
                f"\nRoom ID: {self.room_id}\nCustomer ID: {self.customer_id}")
    
class Room(db.Model):
    __tablename__ = 'room'

    room_id = db.Column('Room_ID', db.Integer, primary_key=True, nullable=False, autoincrement=True)
    room_name = db.Column('Room_Name', db.String(50), nullable=False)
    desc = db.Column('Description', db.String(150), nullable=False)
    price = db.Column('Price', db.Double, nullable=False)
    amenities = db.Column('Amenities', db.String(255), nullable=False) #separated by ','
    active = db.Column('Active', db.Boolean, nullable=False)

    def __repr__(self):
        return (f"Room\nRoom_ID: {self.room_id}\nRoom Name: {self.room_name}"
                f"\nDescription: {self.desc}\nPrice (RM per night): {self.price}, Amenities {self.amenities}"
                f"\nActive Status: {self.active}")

