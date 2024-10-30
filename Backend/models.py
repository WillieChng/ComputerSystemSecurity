from .db_init import db
from werkzeug.security import generate_password_hash, check_password_hash

# New table for users
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), unique=True, nullable=False)
    pword = db.Column(db.String(255), nullable=False)

    #prevent plaintext password from being read
    @property
    def password(self):
        raise AttributeError('password is not a readable attribute')
    
    @password.setter
    def password(self, password):
        self.pword = generate_password_hash(password)

    def verify_password(self, password):  
        return check_password_hash(self.pword, password)
    
    def __repr__(self):
        return (f"User\nUser ID: {self.id}\nUsername: {self.username}")

# Existing table for customers
class Customer(db.Model):
    __tablename__ = 'customer'

    customer_id = db.Column('Customer_ID', db.Integer, primary_key=True, nullable=False, autoincrement=True)
    first_name = db.Column('First_Name', db.String(50), nullable=False)
    last_name = db.Column('Last_Name', db.String(50), nullable=False)
    gender = db.Column('Gender', db.CHAR(1), nullable=False)
    phone_number = db.Column('Phone_Number', db.Integer, nullable=False)
    email = db.Column('E-mail', db.String(50), nullable=False)
    org = db.Column('Organisation', db.String(100), nullable=False)

    def __repr__(self):
        return (f"Customer\nCustomer_ID: {self.customer_id}\nFirst Name: {self.first_name}"
                f"\nLast Name: {self.last_name}\nGender: {self.gender}, Phone Number: {self.phone_number}"
                f"\nE-mail: {self.email}\nOrganization: {self.org}")

class Transaction(db.Model):
    __tablename__ = 'transactions'

    trans_no = db.Column('Trans_No', db.String(100), nullable=False)
    pay_method = db.Column('Payment_Method', db.String(50), nullable=False)
    pay_date = db.Column('Payment_Date', db.Date, nullable=False)
    invoice_no = db.Column('Invoice_No', db.Integer, nullable=False, primary_key=True)
    customer_id = db.Column('Customer_ID', db.Integer, nullable=False)

    def __repr__(self):
        return (f"Transaction\nTransaction No: {self.trans_no}\nPayment Method: {self.pay_method}"
                f"\nPayment Date: {self.pay_date}\nInvoice No: {self.invoice_no}\nCustomer ID: {self.customer_id}")




