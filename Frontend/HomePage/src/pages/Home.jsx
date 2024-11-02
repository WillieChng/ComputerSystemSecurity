import {Link, useNavigate} from 'react-router-dom';
import './Home.css';

function Home() {
    const navigate = useNavigate();

    const handleBookingClick = () => {
        // Add a class to trigger the transition
        document.body.classList.add('fade-out');
        setTimeout(() => {
            navigate('/booking');
        }, 4000); // Duration of the fade-out effect
    };

    return(
        <div className='Home'>
            <div className="video-container">
                <iframe 
                src={`https://www.youtube.com/embed/IxRVa1DbSAg?autoplay=1&controls=0&showinfo=0&mute=1&vq=hd1080&modestbranding=1&loop=1&playlist=IxRVa1DbSAg`} 
                title="YouTube video player" 
                allowFullScreen 
                />
                <div className="video-overlay"></div>
                <div className='video-text'>
                    <h1 className='title'>Welcome to CollabKita</h1>
                    <h2 className='details'>YOUR IDEAL COWORKING SPACE FOR PERSONAL, STARTUPS, AND BUSINESS</h2>
                    <div className='buttonContainer'>
                    <Link to="/booking">
                    <button className='button' onClick={handleBookingClick}>Book Now</button>
                    </Link>
                </div>
                </div>
            </div>                
        </div>
    );
}

export default Home;