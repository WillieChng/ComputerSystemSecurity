from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Configure the SQLAlchemy part of the app instance
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Create the SQLAlchemy db instance
db = SQLAlchemy(app)

# Import the User models
from models import User

# Create the database tables
with app.app_context():
    db.create_all()

#import the routes
from routes import api
app.register_blueprint(api)



if __name__ == '__main__':
    app.run(debug=True)