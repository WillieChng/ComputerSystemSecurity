import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Panel from './components/Panel';
import Booking from './pages/Booking';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';


function App(){
    return(
        <Router>
            <Panel />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/aboutus" element={<AboutUs />} />
            </Routes>
        </Router>
    )
}

export default App
