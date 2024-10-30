import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './Login.css';
import './CreateAccount.css';
import './ForgotPassword.css';
import Login from './Login';
import CreateAccount from './CreateAccount';
import ForgotPassword from './ForgotPassword';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <header className="top-nav">
        <div className="logo">CollabKita</div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="hamburger"></div>
        </div>
      </header>

      {/* Define routes for different components */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>

      {/* Sidebar Menu */}
      {menuOpen && (
        <nav className="side-menu">
          <button className="close-btn" onClick={toggleMenu}>X</button>
          <ul>
            <li>Workspaces</li>
            <li>Locations</li>
            <li>Booking</li>
            <li>Account</li>
            <li>
              <Link to="/" onClick={toggleMenu}>Login</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default App;
