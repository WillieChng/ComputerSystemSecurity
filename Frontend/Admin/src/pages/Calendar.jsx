import React from 'react';

const BookingCalendar = () => {
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

                    /* Calendar heading */
                    h2 {
                        font-size: 24px;
                        margin: 20px 0;
                        color: #333;
                    }

                    /* Calendar table styling */
                    .calendar {
                        margin-top: 20px;
                        overflow: auto;
                    }

                    table {
                        width: 100%;
                        border-collapse: collapse;
                        background-color: white;
                    }

                    th, td {
                        border: 1px solid #ddd;
                        padding: 20px;
                        text-align: center;
                        font-size: 16px;
                    }

                    th {
                        background-color: #a0c4ff;
                        color: black;
                    }

                    .fully-booked {
                        background: linear-gradient(to bottom right, #7FC6A4, #e0fff4);
                    }

                    .available {
                        background-color: white;
                        border: 1px solid black;
                    }

                    /* Legend styling */
                    .legend {
                        margin-top: 20px;
                        display: flex;
                        align-items: center;
                    }

                    .legend-item {
                        display: flex;
                        align-items: center;
                        margin-right: 20px;
                    }

                    .color-box {
                        width: 20px;
                        height: 20px;
                        margin-right: 10px;
                        border-radius: 3px;
                    }
                `}
            </style>

            <div className="header">
                <h1>Company Name</h1>
                <div className="menu-icon">☰</div>
            </div>

            <div className="container">
                <h2>Booking Calendar - October</h2>

                <div className="calendar">
                    <table>
                        <thead>
                            <tr>
                                <th>Monday</th>
                                <th>Tuesday</th>
                                <th>Wednesday</th>
                                <th>Thursday</th>
                                <th>Friday</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="fully-booked">1</td>
                                <td>2</td>
                                <td className="fully-booked">3</td>
                                <td className="fully-booked">4</td>
                                <td className="fully-booked">5</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td className="fully-booked">9</td>
                                <td>10</td>
                                <td className="fully-booked">11</td>
                                <td className="fully-booked">12</td>
                            </tr>
                            <tr>
                                <td className="fully-booked">15</td>
                                <td>16</td>
                                <td className="fully-booked">17</td>
                                <td>18</td>
                                <td className="fully-booked">19</td>
                            </tr>
                            <tr>
                                <td>22</td>
                                <td className="fully-booked">23</td>
                                <td>24</td>
                                <td>25</td>
                                <td>26</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="legend">
                    <div className="legend-item">
                        <div className="color-box fully-booked"></div>
                        <span>- Fully Booked</span>
                    </div>
                    <div className="legend-item">
                        <div className="color-box available"></div>
                        <span>- Available Slots</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingCalendar;