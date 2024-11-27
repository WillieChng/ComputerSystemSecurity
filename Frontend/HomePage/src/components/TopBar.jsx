import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./TopBar.css";
import AccountPng from '../public/8345328.png';
import Logo from '../public/collabkita-logo.png';

export default function TopBar({ collapsed }) {
    return (
      <header className={collapsed ? 'collapsed' : ''}> 
			<Link to="/" className="main-logo-link"> 
        <div className='main-logo' >
        
          <h1>CollabKita</h1> 
          <img
            src={Logo}
            alt="Account"
            className='account-menu-tab-image'
          />
        </div>
      </Link>
      
      <div className="topbar-right">
          <AccountDropdown /> {/* Render the component directly */}
      </div>
      </header>
    );
}


function AccountDropdown() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
  
	const handleMouseEnter = () => setIsDropdownOpen(true);
	const handleMouseLeave = () => setIsDropdownOpen(false);

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
  
    useEffect(() => {
      // Add event listener when component mounts
      document.addEventListener('mousedown', handleClickOutside); 
      return () => document.removeEventListener('mousedown', handleClickOutside); 
    }, []); // Empty dependency array ensures this runs only once on mount
  
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
            <div><button><a href="#">Settings</a></button></div>
            <div><button><a href="#">Logout</a></button></div>
          </div>
        )}
      </div>
    );
}