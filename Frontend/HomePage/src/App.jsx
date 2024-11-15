import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Booking from './pages/Booking';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Profile from './pages/profile';
import Panel from './components/Panel';
import ScrollToTop from './components/scrollToTop';


function App(){
    return(
        <Router>
            <ScrollToTop />
            <Panel />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    )
}

export default App
