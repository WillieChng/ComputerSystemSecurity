import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom"; 
import Panel from "./components/Panel.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Calendar from "./pages/Calendar.jsx";
import UpcomingBooking from "./pages/UpcomingBooking.jsx";
import NewBooking from "./pages/NewBooking.jsx";
import Summary from "./pages/Summary.jsx";
import Statistics from "./pages/Statistics.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import Profiles from "./pages/Profiles.jsx";
import Feedback from "./pages/Feedback.jsx";
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const apiUrl = import.meta.env.VITE_API_URL;

  // Check authentication status on initial render
  useEffect(() => {
      const checkAuth = async () => {
          try {
              const response = await fetch(`${apiUrl}/api/admin/check-auth`, {
                  method: 'GET',
                  credentials: 'include',
              });
              if (response.ok) {
                  setIsLoggedIn(true);
              } else {
                  setIsLoggedIn(false);
              }
          } catch (error) {
              setIsLoggedIn(false);
          }
      };
      checkAuth();
  }, [apiUrl]);

  const handleLogout = () => {
      setIsLoggedIn(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const isLoginPage = location.pathname === '/admin-login';

  return (
      <div>
          {!isLoginPage && isLoggedIn && <Panel onLogout={handleLogout} />}
          <Routes>
              <Route path="/admin-login" element={<AdminLogin onLogin={handleLogin} />} />
              <Route
                  path="/*"
                  element={
                      <ProtectedRoute isAuthenticated={isLoggedIn}>
                          <Routes>
                            <Route path="/" element={<Summary />} />
                            <Route path="calendar" element={<Calendar />} />
                            <Route path="upcoming-booking" element={<UpcomingBooking />} />
                            <Route path="new-booking" element={<NewBooking />} />
                            <Route path="summary" element={<Summary />} />
                            <Route path="statistics" element={<Statistics />} />
                            <Route path="profiles" element={<Profiles />} />
                            <Route path="feedback" element={<Feedback />} />
                          </Routes>
                      </ProtectedRoute>
                  }
              />
          </Routes>
      </div>
  );
}

export default App;