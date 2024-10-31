// BookingProcess.jsx
import React, { useState } from 'react';
import PackageSelection from './PackageSelection';
import PlanSelection from './PlanSelection';
import DateSelection from './DateSelection';
import Confirmation from './Confirmation';
import BookingComplete from './BookingComplete';

const BookingProcess = () => {
    const [step, setStep] = useState(1);
    const [packageType, setPackageType] = useState(null);
    const [plan, setPlan] = useState(null);
    const [date, setDate] = useState(null);

    const goToNextStep = () => {
        setStep(step + 1);
    };

    const handlePackageSelection = (selectedPackage) => {
        setPackageType(selectedPackage);
        goToNextStep();
    };

    const handlePlanSelection = (selectedPlan) => {
        setPlan(selectedPlan);
        goToNextStep();
    };

    const handleDateSelection = (selectedDate) => {
        setDate(selectedDate);
        goToNextStep();
    };

    const handleConfirmation = () => {
        goToNextStep();  // Final step to BookingComplete
    };

    return (
        <div>
            {step === 1 && <PackageSelection onNext={handlePackageSelection} />}
            {step === 2 && <PlanSelection onNext={handlePlanSelection} />}
            {step === 3 && <DateSelection onNext={handleDateSelection} />}
            {step === 4 && <Confirmation packageType={packageType} plan={plan} date={date} onConfirm={handleConfirmation} />}
            {step === 5 && <BookingComplete />}
        </div>
    );
};

export default BookingProcess;