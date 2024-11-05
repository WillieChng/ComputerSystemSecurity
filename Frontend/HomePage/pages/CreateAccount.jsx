import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CreateAccount.css';

function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCheckEmail = async () => {
    try {
      const response = await fetch('/api/check-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      return data.exists;
    } catch (error) {
      setError('Failed to check email. Please try again later.');
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    if (!email) {
      setError('Email is required');
      setLoading(false);
      return;
    }

    // Basic validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordPattern.test(password)) {
      setError('Password must be at least 6 characters and include at least one uppercase letter, one number, and one special character.');
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      setLoading(false);
      return;
    }

    const emailExists = await handleCheckEmail();
    if (emailExists) {
      setError('Email already exists');
      setLoading(false);
      return;
    }

    // Proceed with account creation logic if all checks pass
    setSuccess(true);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setLoading(false);
  };

  return (
    <div className="create-account-container">
      <header className="create-account-header">
        <h1>Create Account</h1>
      </header>

      <form onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">Account successfully created!</p>}
        <div className="input-group">
          <label>Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
        </div>
        <div className="input-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={loading}
          />
        </div>
        <button type="submit" className="create-btn" disabled={loading}>
          {loading ? 'Creating...' : 'Create'}
        </button>
        <Link to="/Login" className="back-btn">
          Go Back to Login
        </Link>
      </form>
    </div>
  );
}

export default CreateAccount;
