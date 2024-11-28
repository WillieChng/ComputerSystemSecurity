import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import "./TopBar.css";
import AccountPng from '../public/8345328.png';
import Logo from '../public/collabkita-logo.png';

export default function TopBar({ collapsed, onLogout }) {
  const location = useLocation();
  const isLoginPage = location.pathname === '/admin-login';

  if (isLoginPage) {
    return null;
  }

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
      <div className="topbar-right">
        <AccountDropdown onLogout={onLogout} />
      </div>
    </header>
  );
}

function AccountDropdown({ onLogout }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/admin/logout`, {
        method: 'POST',
        credentials: 'include',
      });
      if (response.ok) {
        if (onLogout) {
          onLogout();
        }
        navigate('/admin-login'); // Redirect to the login page after logging out
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      className="account-dropdown"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
          <div><button><Link to="/profile">Profile</Link></button></div>
          <div><button><Link to="/settings">Settings</Link></button></div>
          <div><button onClick={handleLogout}>Logout</button></div>
        </div>
      )}
    </div>
  );
}