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

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      {isLoggedIn && <Panel />}
      {/* Define routes for different components */}
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/booking" element={isLoggedIn ? <Booking /> : <Navigate to="/login" />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/settings" element={isLoggedIn ? <Settings /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);