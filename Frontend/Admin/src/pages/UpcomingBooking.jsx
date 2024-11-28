import React from 'react';

const UpcomingBookings = () => {
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

                    /* Booking Table styling */
                    .booking-table {
                        margin-top: 20px;
                    }

                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin: 10px 0;
                        background-color: white;
                    }

                    th, td {
                        border: 1px solid #ddd;
                        padding: 12px;
                        text-align: center;
                        font-size: 16px;
                    }

                    th {
                        background-color: #f08c41;
                        color: white;
                    }

                    tr:nth-child(even) {
                        background-color: #f9f9f9;
                    }

                    tr:hover {
                        background-color: #f1f1f1;
                    }
                `}
            </style>

            <div className="header">
                <h1>Company Name</h1>
                <div className="menu-icon">☰</div>
            </div>

            <div className="container">
                <h2>Upcoming Bookings</h2>

                <div className="booking-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Booking ID</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Booking Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>R001</td>
                                <td>11th October 2024</td>
                                <td>10:00 A.M.</td>
                                <td>Day Pass</td>
                            </tr>
                            <tr>
                                <td>R002</td>
                                <td>14th October 2024</td>
                                <td>1:00 P.M.</td>
                                <td>Prepaid Pass</td>
                            </tr>
                            <tr>
                                <td>R003</td>
                                <td>15th October 2024</td>
                                <td>4:30 P.M.</td>
                                <td>Monthly Pass</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UpcomingBookings;