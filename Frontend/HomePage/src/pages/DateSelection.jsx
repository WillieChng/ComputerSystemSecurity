// DateSelection.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DateSelection = ({ onNext }) => {
    const [date, setDate] = useState(new Date());

    const handleDateSelect = (date) => {
        setDate(date);
    };

    const handleNext = () => {
        onNext(date);
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Choose your slot</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Calendar onChange={handleDateSelect} value={date} />
            </div>
            <button onClick={handleNext} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#558d57', borderRadius: '10px', cursor: 'pointer' }}>
                Next
            </button>
        </div>
    );
};

export default DateSelection;
