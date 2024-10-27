import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Booking from './Booking';
import AboutUs from './AboutUs';
import Home from './Home';

function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/aboutus" element={<AboutUs />} />
            </Routes>
        </Router>
    )
}

export default App
