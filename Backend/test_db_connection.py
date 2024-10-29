from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text
from dotenv import load_dotenv
import os

# Load the .env file
load_dotenv()

app = Flask(__name__)

# Configure the SQLAlchemy part of the app instance
app.config['SQLALCHEMY_DATABASE_URI'] = f"mysql+pymysql://{os.getenv('DB_USERNAME')}:{os.getenv('DB_PASSWORD')}@{os.getenv('DB_HOST')}:{os.getenv('DB_PORT')}/{os.getenv('DB_DATABASE')}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Create the SQLAlchemy db instance
db = SQLAlchemy(app)

def test_db_connection():
    with app.app_context():
        try:
            # Attempt to query the database
            db.session.execute(text('SELECT 1'))
            print("Database connection successful")
            result = db.session.execute(text('SHOW DATABASES'))
            for row in result:
                print(row[0])
            db.session.execute(text('USE CSS'))
            result = db.session.execute(text('SHOW TABLES'))
            for row in result:
                print(row[0])
            #show columns from table
            result = db.session.execute(text('DESCRIBE customer'))
            for row in result:
                print(row[0])
        except Exception as e:
            print(f"Database connection failed: {str(e)}")

if __name__ == '__main__':
    test_db_connection()