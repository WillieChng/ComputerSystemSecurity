import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./TopBar.css";
import AccountPng from '../public/8345328.png';
import Logo from '../public/collabkita-logo.png';

export default function TopBar({ collapsed, onLogout, isLoggedIn }) {
  return (
    <header className={collapsed ? 'collapsed' : ''}>
      <Link to="/" className="main-logo-link">
        <div className='main-logo'>
          <h1>CollabKita</h1>
          <img
            src={Logo}
            alt="Account"
            className='account-menu-tab-image'
          />
        </div>
      </Link>

      {isLoggedIn && ( // Render dropdown only if logged in
        <div className="topbar-right">
          <AccountDropdown onLogout={onLogout} />
        </div>
      )}
    </header>
  );
}

function AccountDropdown({ onLogout }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    onLogout(); // Call the logout logic from App.jsx
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div
      className="account-dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={dropdownRef}
    >
      <button className="account-selection-button">
        <div className="account-content">
          <img
            src={AccountPng}
            alt="Account"
            style={{ width: '40px', height: '40px', borderRadius: '50%', margin: '10px' }}
          />
        </div>
      </button>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <div><button onClick={() => navigate('/profile')}>Profile</button></div>
          <div><button onClick={() => navigate('/settings')}>Settings</button></div>
          <div><button onClick={handleLogout}>Logout</button></div>
        </div>
      )}
    </div>
  );
}