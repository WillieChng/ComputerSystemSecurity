import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>About CollabKita</p>
                <p>CollabKita is your ideal coworking space for personal, startups, and business needs.</p>
                <p>&copy; 2023 CollabKita. All rights reserved.</p>
                <p>
                    <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Use</a>
                </p>
            </div>
        </footer>
    );
}