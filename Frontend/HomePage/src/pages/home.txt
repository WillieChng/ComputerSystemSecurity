import {useNavigate} from 'react-router-dom';
import './Home.css';

export default function Home() {
    const navigate = useNavigate();

    const handleBookingClick = (e) => {
        e.preventDefault();
        // Add a class to trigger the transition
        document.body.classList.add('fade-out');
        setTimeout(() => {
            navigate('/booking');
        }, 2000); // Duration of the fade-out effect
    };

    return(
        <div className='Home'>
            <div className="video-container">
                <iframe 
                    src={`https://www.youtube.com/embed/IxRVa1DbSAg?autoplay=1&controls=0&showinfo=0&mute=1&vq=hd1080&modestbranding=1&loop=1&playlist=IxRVa1DbSAg&rel=0&iv_load_policy=3&disablekb=1&fs=0&cc_load_policy=0&cc_lang_pref=en&hl=en&enablejsapi=1&start=3`} 
                    title="YouTube video player" 
                allowFullScreen 
                />
                <div className="video-overlay"></div>
                <div className='video-text'>
                    <h1 className='title'>Welcome to CollabKita</h1>
                    <h2 className='details'>YOUR IDEAL COWORKING SPACE FOR PERSONAL, STARTUPS, AND BUSINESS</h2>
                    <div className='buttonContainer'>
                    {/* <Link to="/booking"> */}
                    <div className='buttonContainer'>
                        <button className='button' onClick={handleBookingClick}>Book Now</button>
                    {/* </Link> */}
                    </div>
                </div>
                </div>
            </div>                
        </div>
    );
}