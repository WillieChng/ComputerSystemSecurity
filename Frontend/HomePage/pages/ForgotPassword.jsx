// ForgotPassword.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        // Show a success message if the request is successful
        setMessage(`If an account with email ${email} exists, a reset link has been sent.`);
      } else {
        // Show an error message if something goes wrong
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      // Handle any network or unexpected errors
      setError('Error: Unable to send reset link. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <header className="forgot-password-header">
        <h1>Forgot Password</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
        </div>
        <button type="submit" className="reset-btn" disabled={loading}>
          {loading ? 'Sending...' : 'Reset Password'}
        </button>
        <div className="back-to-login">
        <Link to="/Login" className="back-btn">Back to Login</Link>
        </div>
      </form>
      {message && <p className="message">{message}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default ForgotPassword;