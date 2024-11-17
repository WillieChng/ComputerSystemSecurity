import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Booking from './pages/Booking';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Profile from './pages/profile';
// import Panel from './components/Panel';
import NavBar from './components/NavBar';
import ScrollToTop from './components/scrollToTop';
import Footer from './components/Footer';
import './App.css';


function App(){
    return(
        <Router>
            <ScrollToTop />
            {/* <Panel /> */}
            <NavBar />
            <div className="App">
                <div className="content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
            </div>
            <Footer />
        </div>
        </Router>
    )
}

export default App
