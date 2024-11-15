import './AboutUs.css';
import LaptopIcon from '@mui/icons-material/Laptop';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import LockIcon from '@mui/icons-material/Lock';
import WifiIcon from '@mui/icons-material/Wifi';

export default function AboutUs(){
    const teamMembers = [
        { imgSrc: 'https://plus.unsplash.com/premium_photo-1723651263389-bb970acbe653?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'John Doe', position: 'Founder & CEO' },
        { imgSrc: 'https://plus.unsplash.com/premium_photo-1723651263389-bb970acbe653?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'John Doe 2', position: 'Secretary' },
        { imgSrc: 'https://plus.unsplash.com/premium_photo-1723651263389-bb970acbe653?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'John Doe 3', position: 'Fronte' },
        { imgSrc: 'https://plus.unsplash.com/premium_photo-1723651263389-bb970acbe653?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'John Doe 4', position: 'Backe' },
        { imgSrc: 'https://plus.unsplash.com/premium_photo-1723651263389-bb970acbe653?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'John Doe 5', position: 'CEO' },
        { imgSrc: 'https://plus.unsplash.com/premium_photo-1723651263389-bb970acbe653?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'John Doe 6', position: 'CTO' },
        { imgSrc: 'https://plus.unsplash.com/premium_photo-1723651263389-bb970acbe653?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'John Doe 7', position: 'CFO' },
        { imgSrc: 'https://plus.unsplash.com/premium_photo-1723651263389-bb970acbe653?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'John Doe 8', position: 'COO' },
        { imgSrc: 'https://plus.unsplash.com/premium_photo-1723651263389-bb970acbe653?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'John Doe 9', position: 'CIO' },
        { imgSrc: 'https://plus.unsplash.com/premium_photo-1723651263389-bb970acbe653?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'John Doe 10', position: 'CPO' },
        { imgSrc: 'https://plus.unsplash.com/premium_photo-1723651263389-bb970acbe653?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'John Doe 11', position: 'CLO' },
    ];

    return(
        <div className='about-us'>
            <div className='about'>
                <h1>About Us</h1>
                <p>Who are we & our mission</p>
            </div>
            
                <div className='story'>
                    <div className='story-content-1'/>
                    <div className='story-content-2'>
                    <h3>Our Story</h3>    
                    <p>CollabKita was founded with the vision of creating a shared space where entrepreneurs and small businesses can thrive. We understand the challenges faced by startups, and our goal is to offer a supportive environment that not only meets your workspace needs but also encourages networking and collaboration among like-minded professionals.</p>
                    </div>
                </div>

            <div className='who-features-container'>
                <div className='who'>
                    <h3>Who We Serve</h3>
                    <h5>At CollabKita, we cater to a diverse range of users, including:</h5>
                    <ul>
                        <div className='who-content'>
                            <div className='who-content-main-1'>
                                <div className='who-1'>
                                    <EngineeringIcon className='who-image-engineering'/>
                                    <div className='who-title'>Freelancers</div>
                                </div>
                                <div className='who-content-text'>Individuals/students looking for a professional environment to work independently.</div>
                            </div>
                            <div className='who-content-main-2'>
                                <div className='who-2'>
                                    <RoomPreferencesIcon className='who-content-2'/>
                                    <div className='who-title'>Startups</div>
                                </div>
                                <div className='startups'>New businesses in need of flexible office solutions without the overhead costs of traditional leasing.</div>
                            </div>
                            <div className='who-content-main-3'>
                                <div className='who-3'>
                                    <LaptopIcon className='who-content-3'/>
                                    <div className='who-title'>Teams</div> 
                                </div>
                                <div className='remote'>Companies seeking a centralized location for team meetings and collaboration.</div>
                            </div>
                        </div>
                    </ul>
                </div>
                <div className='features'>
                    <h3>Our Features</h3>
                    <h5>We pride ourselves n providing an array of features designed to enhance your working experience:</h5>
                    <ul>
                        <div className='feature-1'>
                            <div className='feature-sub'>
                                <CardMembershipIcon className='feature-icon'/>
                                <div className='feature-title'>Membership Plans</div>
                            </div>
                            <div className='feature-content'>Choose from private offices or shared desks tailored to your needs.</div>
                        </div>
                        <div className='feature-2'>
                            <div className='feature-sub'>
                                <MeetingRoomIcon className='feature-icon'/>
                                <div className='feature-title'>Flexible Modern Workspace</div>
                            </div>
                            <div className='feature-content'>Enjoy reliable connectivity to keep you productive.</div>
                        </div>
                        <div className='feature-3'>
                            <div className='feature-sub'>
                                <LockIcon className='feature-icon'/>
                                <div className='feature-title'>Private Rooms</div>
                            </div>
                            <div className='feature-content'>Access private offices for focused work or confidential meetings, providing you with the privacy you need.</div>
                        </div>
                        <div className='feature-4'>
                            <div className='feature-sub'>
                                <WifiIcon className='feature-icon'/>
                                <div className='feature-title'>High-Speed Internet</div>
                            </div>
                            <div className='feature-content'>Stay connected with reliable, high-speed internet that keeps you productive throughout the day.</div>
                        </div>
                    </ul>
                </div>
            </div>

            <div className='security'>
                <div className='security-content-1'>
                    <h3>Security Commitment</h3>
                    <p>Understanding the importance of security in today’s digital landscape, we have implemented robust measures to protect our members. Our website is secured with HTTPS, ensuring that all communications are encrypted and safe from potential threats. We continually assess our security protocols to counteract common vulnerabilities and maintain a safe environment for all users.</p>
                </div>
                <div className='security-image'/>
            </div>

            <div className='meet'>
                <h3>Meet Our Team</h3>
                <p>Our dedicated team is passionate about creating an inspiring workspace.</p>
                <div className='team'>
                    {teamMembers.map((member, index) => (
                        <div className='team-member' key={index}>
                            <img src={member.imgSrc} alt={member.name} />
                            <h5>{member.name}</h5>
                            <p>{member.position}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}