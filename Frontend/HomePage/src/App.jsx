import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Booking from './pages/Booking';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Panel from './components/Panel';

function App(){
    return(
        <Router>
            <Panel />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
        </Router>
    )
}

export default App
