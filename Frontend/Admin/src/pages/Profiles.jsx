import React from 'react';

const CustomerTable = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <div style={{ backgroundColor: '#a2d5ac', padding: '10px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>Company Name</h2>
        <div style={{ fontSize: '24px', cursor: 'pointer' }}>☰</div>
      </div>
      
      <h3 style={{ marginTop: '20px', color: '#2c3e50' }}>Customer</h3>

      <table style={{ width: '95%', borderCollapse: 'collapse', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <thead>
          <tr style={{ backgroundColor: '#6c8c91', color: 'white' }}>
            <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Customer ID</th>
            <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Booking History</th>
            <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Contact Information</th>
            <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: '#f9f9f9' }}>
            <td style={{ padding: '10px', textAlign: 'center' }}>CID111</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>17th October 2024</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>011-1234 567</td>
            <td style={{ padding: '10px', textAlign: 'center', color: 'green' }}>Completed</td>
          </tr>
          <tr style={{ backgroundColor: '#ffffff' }}>
            <td style={{ padding: '10px', textAlign: 'center' }}>CID112</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>22nd October 2024</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>012-3456 789</td>
            <td style={{ padding: '10px', textAlign: 'center', color: 'green' }}>Completed</td>
          </tr>
          <tr style={{ backgroundColor: '#f9f9f9' }}>
            <td style={{ padding: '10px', textAlign: 'center' }}>CID113</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>23rd October 2024</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>013-4567 891</td>
            <td style={{ padding: '10px', textAlign: 'center', color: 'red' }}>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
