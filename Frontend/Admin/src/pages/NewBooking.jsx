import React from 'react';

const NewBooking = () => {
    return (
        <div>
            <style>
                {`
                    /* General reset and styles */
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }

                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f5f5f5;
                    }

                    .header {
                        background-color: #b8d4b8;
                        padding: 10px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .header h1 {
                        color: black;
                    }

                    .menu-icon {
                        font-size: 20px;
                        cursor: pointer;
                    }

                    /* Container styling */
                    .container {
                        width: 80%;
                        margin: 20px auto;
                    }

                    h2 {
                        font-size: 24px;
                        margin: 20px 0;
                        color: #333;
                    }

                    /* Booking Form styling */
                    .booking-form {
                        background-color: #fff;
                        padding: 20px;
                        border-radius: 5px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }

                    .form-field {
                        margin-bottom: 15px;
                    }

                    label {
                        display: block;
                        margin-bottom: 5px;
                        font-weight: bold;
                    }

                    input[type="text"],
                    input[type="date"],
                    input[type="time"],
                    select {
                        width: 100%;
                        padding: 10px;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                    }

                    .book-now-btn {
                        width: 100%;
                        padding: 10px;
                        background-color: #f08c41;
                        color: white;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 18px;
                    }

                    .book-now-btn:hover {
                        background-color: #e07c33;
                    }
                `}
            </style>

            <div className="header">
                <h1>Company Name</h1>
                <div className="menu-icon">☰</div>
            </div>

            <div className="container">
                <div className="booking-form">
                    <h2>Add New Booking</h2>
                    <div className="form-field">
                        <label htmlFor="full-name">Full Name</label>
                        <input type="text" id="full-name" name="full-name" placeholder="Enter your full name" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="contact">Contact No.</label>
                        <input type="text" id="contact" name="contact" placeholder="Enter your contact number" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" name="date" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="time">Time</label>
                        <input type="time" id="time" name="time" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="booking-type">Booking Type</label>
                        <select id="booking-type" name="booking-type">
                            <option value="day-pass">Day Pass</option>
                            <option value="prepaid-pass">Prepaid Pass</option>
                            <option value="monthly-pass">Monthly Pass</option>
                        </select>
                    </div>
                    <button className="book-now-btn">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default NewBooking;