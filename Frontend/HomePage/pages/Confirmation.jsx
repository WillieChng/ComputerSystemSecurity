// Confirmation.jsx
import React from 'react';

const Confirmation = ({ packageType, plan, date, onConfirm }) => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Confirm your booking</h1>
            <p><strong>Package:</strong> {packageType}</p>
            <p><strong>Plan:</strong> {plan.name} - {plan.price}</p>
            <p><strong>Date:</strong> {date.toDateString()}</p>
            <button onClick={onConfirm} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#558d57', borderRadius: '10px', cursor: 'pointer' }}>
                Confirm Booking
            </button>
        </div>
    );
};

export default Confirmation;
