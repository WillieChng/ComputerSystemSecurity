from sqlalchemy import text, select
from Backend.models import User, Customer
from Backend.app_db_init import db, app
from tabulate import tabulate

#Create the database tables if they do not exist
with app.app_context():
    db.create_all()


#Query the database
def query():
    user_list = []
    customer_list = []

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

    return user_list, customer_list

#Display the query results from the query()
def print_query():
    user_list, customer_list = query()
    print("Users:")
    print(tabulate(user_list, headers='keys', tablefmt='pretty'))
    print("Customers:")
    print(tabulate(customer_list, headers='keys', tablefmt='pretty'))

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