import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import CreateAccount from './pages/CreateAccount.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import ContactUs from './pages/ContactUs';
import Profile from './pages/Profile.jsx';
import Booking from './pages/Booking.jsx';
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Panel from './components/Panel.jsx';
import Settings from './pages/Settings.jsx';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import TopBar from './components/TopBar.jsx';
import AuthRedirect from './components/AuthRedirect'; // Import the AuthRedirect component

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;
  console.log(`API URL: ${apiUrl}`);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <AuthRedirect isLoggedIn={isLoggedIn} />
      {isLoggedIn && <Panel onLogout={handleLogout} />}
      {/* Define routes for different components */}
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/booking" element={<ProtectedRoute><Booking /></ProtectedRoute>} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}