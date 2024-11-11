import React from 'react';

const PackageSelection = ({ onNext }) => {
    const handlePackageSelect = (packageType) => {
        // Proceed to next step with selected package
        onNext(packageType);
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Choose your package</h1>
            <h4>Don't see your preferred options? Contact us for a custom quote.</h4>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <button onClick={() => handlePackageSelect('pax')} style={{ border: '1px solid black', borderRadius: '7px', padding: '10px', cursor: 'pointer' }}>
                    By pax
                </button>
                <button onClick={() => handlePackageSelect('group')} style={{ border: '1px solid black', borderRadius: '7px', padding: '10px', cursor: 'pointer' }}>
                    By group
                </button>
            </div>
        </div>
    );
};

export default PackageSelection;
