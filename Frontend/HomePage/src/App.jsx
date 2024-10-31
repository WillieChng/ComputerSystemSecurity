import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login.jsx';
import CreateAccount from '../pages/CreateAccount.jsx';
import ForgotPassword from '../pages/ForgotPassword.jsx';
import Booking from '../pages/Booking.jsx';
import Home from '../pages/Home.jsx';
import AboutUs from '../pages/AboutUs.jsx';
import Panel from '../components/Panel.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Panel />
      {/* Define routes for different components */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
