import React from 'react';

const BookingSummary = () => {
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

                    .container {
                        width: 80%;
                        margin: 20px auto;
                    }

                    .content-box {
                        background-color: white;
                        padding: 20px;
                        border: 1px solid #ccc;
                        margin-top: 15px;
                    }

                    .stats {
                        display: flex;
                        justify-content: space-around;
                        margin-top: 20px;
                    }

                    .stats div {
                        background-color: #e7e7e7;
                        padding: 15px;
                        width: 22%;
                        border-radius: 5px;
                        text-align: center;
                        font-size: 18px;
                    }

                    .stats div h3 {
                        color: #333;
                    }

                    .stats div p {
                        font-size: 16px;
                        color: #555;
                    }
                `}
            </style>

            <div className="header">
                <h1>Company Name</h1>
                <div className="menu-icon">☰</div>
            </div>

            <div className="container">
                <div className="content-box">
                    <h2>Booking Summary</h2>

                    <div className="stats">
                        <div>
                            <h3>Day</h3>
                            <p>Total Bookings: 8</p>
                        </div>
                        <div>
                            <h3>Week</h3>
                            <p>Total Bookings: 40</p>
                        </div>
                        <div>
                            <h3>Month</h3>
                            <p>Total Bookings: 200</p>
                        </div>
                        <div>
                            <h3>Available Spaces</h3>
                            <p>Spaces: 10</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingSummary;