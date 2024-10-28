import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Panel from "./components/Panel.jsx";
import Home from "./pages/Home.jsx";
import Booking from  "./pages/Booking.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Panel />
      <Routes>
        {/*Besides the first home page the rest of the pages aren't 
        so important on the orders or ranking but recommended to be organise*/}
        <Route path="/" element={<Home />} />      
        <Route path="booking" element={<Booking />} /> 
        <Route path="aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
