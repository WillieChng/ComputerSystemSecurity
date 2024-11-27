import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Simple check to simulate successful login
    if (email && password) {
      alert('Login successful!');
      onLogin(email); // Call the function to update login status
      navigate('/'); // Redirect to the home page
    } else {
      setError('Please enter your email and password');
    }
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <h1>Login</h1>
      </header>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="account-options">
          <Link to="/forgot-password">Forgot password?</Link>
          <Link to="/create-account">Create account</Link>
        </div>
        <div className="actions">
          <button type="submit" className="login-btn">
            Login
          </button>
        </div>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Login;
