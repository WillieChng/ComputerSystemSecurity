import React, { useState } from 'react';

const CustomerStatistics = () => {
  const [newCustomers, setNewCustomers] = useState(50);
  const [returningCustomers, setReturningCustomers] = useState(80);

  // Total number of customers
  const total = newCustomers + returningCustomers;

  // Calculate percentage for each segment
  const newCustomerPercentage = (newCustomers / total) * 100;
  const returningCustomerPercentage = (returningCustomers / total) * 100;

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Company Name</h1>
      </header>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Customer Statistics</h2>

        <div style={styles.statistics}>
          <div style={styles.statsContent}>
            <div style={styles.statsItem}>
              <p style={styles.statsText}>New Customers: <span>{newCustomers}</span></p>
            </div>
            <div style={styles.statsItem}>
              <p style={styles.statsText}>Returning Customers: <span>{returningCustomers}</span></p>
            </div>
          </div>

          {/* Radial progress diagram */}
          <div style={styles.chartContainer}>
            <div style={styles.pieChart}>
              <svg height="200" width="200" viewBox="0 0 200 200">
                {/* Circle background */}
                <circle cx="100" cy="100" r="90" fill="none" stroke="#e7e7e7" strokeWidth="20" />
                
                {/* New Customers Segment */}
                <circle 
                  cx="100" cy="100" r="90" fill="none"
                  stroke="#4BC0C0" strokeWidth="20" 
                  strokeDasharray={`${newCustomerPercentage * 2.83} ${100 * 2.83}`}
                  transform="rotate(-90 100 100)" />
                
                {/* Returning Customers Segment */}
                <circle 
                  cx="100" cy="100" r="90" fill="none"
                  stroke="#9966FF" strokeWidth="20" 
                  strokeDasharray={`${returningCustomerPercentage * 2.83} ${100 * 2.83}`}
                  transform="rotate(-90 100 100)" />
                
                {/* Center Text */}
                <text x="50%" y="50%" textAnchor="middle" stroke="#000" strokeWidth="1px" dy=".3em" fontSize="20">
                  {Math.round(newCustomerPercentage)}% / {Math.round(returningCustomerPercentage)}%
                </text>
              </svg>
            </div>

            <div style={styles.legend}>
              <div style={styles.legendItem}>
                <div style={{ ...styles.legendColor, backgroundColor: '#4BC0C0' }}></div>
                <p style={styles.legendText}>New Customers</p>
              </div>
              <div style={styles.legendItem}>
                <div style={{ ...styles.legendColor, backgroundColor: '#9966FF' }}></div>
                <p style={styles.legendText}>Returning Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    margin: '40px auto',
    padding: '30px',
    maxWidth: '1200px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
  },
  header: {
    backgroundColor: '#b8d4b8',
    padding: '20px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'black',
    fontSize: '28px',
    marginLeft: '10px',
  },
  section: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: 'black',
    marginTop: '30px',
    marginBottom: '20px',
    lineHeight: '1.5',
  },
  sectionTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: 'black',
  },
  statistics: {
    marginTop: '30px',
  },
  statsContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
  },
  statsItem: {
    backgroundColor: '#e7e7e7',
    padding: '20px',
    width: '30%',
    borderRadius: '8px',
    textAlign: 'center',
    fontSize: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.05)',
  },
  statsText: {
    fontSize: '18px',
    color: '#555',
  },
  chartContainer: {
    width: '100%',
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  pieChart: {
    position: 'relative',
    width: '200px',
    height: '200px',
  },
  legend: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '20px',
  },
  legendColor: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  legendText: {
    fontSize: '16px',
    color: '#555',
  },
};

export default CustomerStatistics;
