import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login.jsx';
import CreateAccount from './pages/CreateAccount.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import ContactUs from './pages/ContactUs';
import Profile from './pages/Profile.jsx';
import Booking from './pages/Booking.jsx';
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Panel from './components/Panel.jsx';
import Settings from '../pages/Settings.jsx';
import NavBar from './components/NavBar';
import ScrollToTop from './components/scrollToTop';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const apiUrl=import.meta.env.VITE_API_URL;
  console.log(`API URL: ${apiUrl}`);

  const handleLogin = () => {
    setIsLoggedIn(true);
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
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={isLoggedIn ? <Settings /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

