// Confirmation.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Confirmation.css'; // Assuming you create a CSS file for styles

const Confirmation = ({ packageType, plan, date, onConfirm, onCancel }) => {
    return (
        <div className="confirmation-container">
            <h1>Confirm your booking</h1>
            <p><strong>Package:</strong> {packageType}</p>
            <p><strong>Plan:</strong> {plan.name} - {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'MYR' }).format(plan.price)}</p>
            <p><strong>Start Date:</strong> {date.toDateString()}</p>
            <div className="confirmation-buttons">
                <button onClick={onConfirm} className="confirm-button" aria-label="Confirm Booking">
                    Confirm Booking
                </button>
                <button onClick={onCancel} className="confirm-button" aria-label="Cancel Booking">
                    Cancel
                </button>
            </div>
        </div>
    );
};

Confirmation.propTypes = {
    packageType: PropTypes.string.isRequired,
    plan: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

export default Confirmation;