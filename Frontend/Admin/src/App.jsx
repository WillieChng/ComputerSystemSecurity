import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Panel from "./components/Panel.jsx";
import Calendar from "./pages/Calendar.jsx";
import UpcomingBooking from "./pages/UpcomingBooking.jsx";
import NewBooking from "./pages/NewBooking.jsx";
import Summary from "./pages/Summary.jsx";
import Statistics from "./pages/Statistics.jsx";
import Login from "./pages/Login.jsx";
import Profiles from "./pages/Profiles.jsx";
import Feedback from "./pages/Feedback.jsx";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Panel />
      <Routes>
        {/*Besides the first home page the rest of the pages aren't 
        so important on the orders or ranking but recommended to be organise*/}     
        <Route path="calendar" element={<Calendar />} />
        <Route path="upcoming-booking" element={<UpcomingBooking />} />
        <Route path="new-booking" element={<NewBooking />} />
        <Route path="summary" element={<Summary />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="login" element={<Login />} />
        <Route path="profiles" element={<Profiles />} />
        <Route path="feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
