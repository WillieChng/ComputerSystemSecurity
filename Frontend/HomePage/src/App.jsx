import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login.jsx';
import CreateAccount from '../pages/CreateAccount.jsx';
import ForgotPassword from '../pages/ForgotPassword.jsx';
import Booking from '../pages/Booking.jsx';
import Home from '../pages/Home.jsx';
import AboutUs from '../pages/AboutUs.jsx';
import Panel from '../components/Panel.jsx';
import Profile from '../pages/Profile.jsx';
import Settings from '../pages/Settings.jsx';
import TopBar from '../components/TopBar.jsx';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ email: '' });

  const handleLogin = (email) => {
    setIsLoggedIn(true);
    setUser({ email }); // Correctly set the user email
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({ email: '' });
  };

  return (
    <BrowserRouter>
      <TopBar collapsed={false} onLogout={handleLogout} isLoggedIn={isLoggedIn} />
      {/* Show Panel (sidebar) only when logged in */}
      {isLoggedIn && <Panel />}
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected routes */}
        <Route path="/booking" element={isLoggedIn ? <Booking /> : <Navigate to="/login" />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/profile" element={isLoggedIn ? <Profile user={user} /> : <Navigate to="/login" />} />
        <Route path="/settings" element={isLoggedIn ? <Settings /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);