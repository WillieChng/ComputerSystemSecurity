// Confirmation.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Confirmation.css'; // Assuming you create a CSS file for styles

const Confirmation = ({ packageType, plan, date, onConfirm }) => {
    return (
        <div className="confirmation-container">
            <h1>Confirm your booking</h1>
            <p><strong>Package:</strong> {packageType}</p>
            <p><strong>Plan:</strong> {plan.name} - {plan.price}</p>
            <p><strong>Date:</strong> {date.toDateString()}</p>
            <button onClick={onConfirm} className="confirm-button" aria-label="Confirm Booking">
                Confirm Booking
            </button>
        </div>
    );
};

Confirmation.propTypes = {
    packageType: PropTypes.string.isRequired,
    plan: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
    }).isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    onConfirm: PropTypes.func.isRequired,
};

export default Confirmation;