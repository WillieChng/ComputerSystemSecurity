import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CreateAccount.css';

function CreateAccount() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [org, setOrg] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordPattern.test(password)) {
      setError('Password must be at least 6 characters and include at least one uppercase letter, one number, and one special character (@,$,!,%,*,?, or &).');
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/create-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          gender,
          phone,
          org,
          email,
          password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess(true);
        setFirstName('');
        setLastName('');
        setGender('');
        setPhone('');
        setOrg('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        alert('Account successfully created!');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Failed to create account. Please try again later.');
    }

    setLoading(false);
    // const emailExists = await handleCheckEmail();
    // if (emailExists) {
    //   setError('Email already exists');
    //   setLoading(false);
    //   return;
    // }


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
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            disabled={loading}
            required
          />
        </div>
        <div className="input-group">
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            disabled={loading}
            required
          />
        </div>
        <div className="input-group">
          <label>Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            disabled={loading}
            required
          >
            <option value="" disabled>Select Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
        <div className="input-group">
          <label>Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={loading}
            required
          />
        </div>
        <div className="input-group">
          <label>Organization</label>
          <input
            type="text"
            value={org}
            onChange={(e) => setOrg(e.target.value)}
            disabled={loading}
            required
          />
        </div>
        <div className="input-group">
          <label>Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            required
          />
        </div>
        <div className="input-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={loading}
            required
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
