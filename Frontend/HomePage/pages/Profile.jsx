import React from 'react';

const Profile = ({ user }) => {
  return (
    <div className="profile-container" style={styles.container}>
      <h1 style={styles.header}>Hi, {user.email ? user.email : 'Guest'}!</h1>
      {user.email && <p style={styles.text}>Welcome to your profile page.</p>}
    </div>
  );
};

// Add some simple inline styles
const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '32px',
    color: '#4f7335',
  },
  text: {
    fontSize: '18px',
    color: '#333',
  },
};

export default Profile;
