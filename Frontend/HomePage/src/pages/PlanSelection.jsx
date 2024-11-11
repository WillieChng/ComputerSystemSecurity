// PlanSelection.jsx
import React from 'react';

const PlanSelection = ({ onNext }) => {
    const plans = [
        { name: "DAY PASS", price: "RM 20 /day" },
        { name: "WEEKLY PASS (5 days)", price: "RM 90 (10% OFF)" },
        { name: "MONTHLY PASS (20 days)", price: "RM 340 (15% OFF)" }
    ];

    const handlePlanSelect = (plan) => {
        // Proceed to next step with selected plan
        onNext(plan);
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Choose your plan</h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                {plans.map((plan, index) => (
                    <button key={index} onClick={() => handlePlanSelect(plan)} style={{ border: '1px solid black', borderRadius: '7px', padding: '20px', cursor: 'pointer' }}>
                        {plan.name} <br /> {plan.price}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PlanSelection;