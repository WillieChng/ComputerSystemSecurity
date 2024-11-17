import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logo from '../public/collabkita-logo.png';

export default function NavBar() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>CollabKita</h1>
                <Link to="/">
                    <img src={Logo} alt="CollabKita" />
                </Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link 
                        to="/" 
                        className={activeLink === '/' ? 'active' : ''} 
                        onClick={() => handleLinkClick('/')}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/booking" 
                        className={activeLink === '/booking' ? 'active' : ''} 
                        onClick={() => handleLinkClick('/booking')}
                    >
                        Booking
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about-us" 
                        className={activeLink === '/about-us' ? 'active' : ''} 
                        onClick={() => handleLinkClick('/about-us')}
                    >
                        About Us
                    </Link>
                </li>
            </ul>
            <div className="navbar-user">
                <AccountDropdown />
            </div>
        </nav>
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
                    <AccountCircleIcon className="account-icon" style={{ fontSize: '40px' }} />
                </div>
            </button>
            {isDropdownOpen && (
                <div className="dropdown-content">
                    <div><button><Link to="/profile">Profile</Link></button></div>
                    <div><button><a href="#">Logout</a></button></div>
                </div>
            )}
        </div>
    );
}