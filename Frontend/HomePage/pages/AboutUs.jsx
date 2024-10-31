import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us-page">
            <div className="about-us-container">
                <h1>About Us</h1>
                <h3>Our Story</h3>
                <p>CollabKita was founded with the vision of creating a shared space where entrepreneurs and small businesses can thrive. We understand the challenges faced by startups, and our goal is to offer a supportive environment that not only meets your workspace needs but also encourages networking and collaboration among like-minded professionals.</p>
                
                <h3>Who We Serve</h3>
                <h5>At CollabKita, we cater to a diverse range of users, including:</h5>
                <ul>
                    <li>Freelancers: Individuals/students looking for a professional environment to work independently.</li>
                    <li>Startups: New businesses in need of flexible office solutions without the overhead costs of traditional leasing.</li>
                    <li>Remote Teams: Companies seeking a centralized location for team meetings and collaboration.</li>
                </ul>
                
                <h3>Our Features</h3>
                <h5>We pride ourselves on providing an array of features designed to enhance your working experience:</h5>
                <ul>
                    <li>Flexible Office Spaces: Choose from private offices or shared desks tailored to your needs.</li>
                    <li>High-Speed Internet: Enjoy reliable connectivity to keep you productive.</li>
                    <li>Private Rooms: Access private offices for focused work or confidential meetings, providing you with the privacy you need.</li>
                </ul>
                
                <h3>Security Commitment</h3>
                <p>Understanding the importance of security in today’s digital landscape, we have implemented robust measures to protect our members. Our website is secured with HTTPS, ensuring that all communications are encrypted and safe from potential threats. We continually assess our security protocols to counteract common vulnerabilities and maintain a safe environment for all users.</p>
                
                <h3>Meet Our Team</h3>
                <p>Our dedicated team is passionate about creating an inspiring workspace. Each member plays a crucial role in ensuring that CollabKita runs smoothly and effectively. We believe in open communication and collaboration, making it easy for you to reach out with any questions or needs.</p>
            </div>
        </div>
    );
}

export default AboutUs;