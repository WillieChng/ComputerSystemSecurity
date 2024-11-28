import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent form submission

    // Check if username and password are empty
    if (username === '' || password === '') {
      alert('Please fill out both the username and password fields.');
    } else {
      // Simulate login process 
      if (username === 'admin' && password === 'password123') {
        alert('Login successful!');
        navigate('/overview'); // Redirect to the overview page after login
      } else {
        alert('Incorrect username or password. Please try again.');
      }
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form id="loginForm" onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;