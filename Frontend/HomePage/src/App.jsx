import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';
import ForgotPassword from '../pages/ForgotPassword';
import Panel from '../components/Panel';
import TopBar from '../components/TopBar';

export default function App() {
  return (
    <BrowserRouter>
      <TopBar/>
      <Panel />
      {/* Define routes for different components */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}