import {Link} from 'react-router-dom';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import LockIcon from '@mui/icons-material/Lock';
import WifiIcon from '@mui/icons-material/Wifi';

function Home() {
    const styles = {
        title: {
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#f0f0f0',
            color: '#4f7335',
            fontSize: '30px'
        },
        imageContainer: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px'
        },
        image: {
            width: '350px',
            height: '250px',
            margin: '0 20px',
            borderRadius: '7px'
        },
        h3: {
            textAlign: 'center',
            fontSize: '28px'
        },
        list: {
            display: 'flex',
            listStyleType: 'none',
            justifyContent: 'center',
            padding: 0,
            textAlign: 'center',
            marginTop: '20px'
        },
        listItem: {
            fontSize: '24px',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            marginBottom: '10px', 
            marginRight: '20px', 
            padding: 0
        },
        icon: {
            marginRight: '10px' 
        },
        buttonContainer:{
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center'
        },
        button: {
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#558d57',
            borderRadius: '10px',
            cursor: 'pointer',
        }
    };
    return(
        <div style={styles.container}>
            <h2 style={styles.title}>YOUR IDEAL COWORKING SPACE FOR PERSONAL, STARTUPS, AND BUSINESS</h2>
            
            <div style={styles.imageContainer}>
                <img src="https://uptown.id/wp-content/uploads/2019/02/Private-Office-Uptown-Serviced-Office-Lantai-21-Plaza-Mutiara-Mega-Kuningan-Jakarta-1900x1045.jpeg" alt="small room" style={styles.image}/>
                <img src="https://th.bing.com/th/id/OIP.rqjnZw-qSdSJZR34POkuQwAAAA?rs=1&pid=ImgDetMain" alt="meeting room" style={styles.image}/>
                <img src="https://i.pinimg.com/originals/b6/cc/58/b6cc581e150bd3a1bea342abee876302.jpg" alt="private room" style={styles.image}/>
            </div>
            <h3 style={styles.h3}>Why CollabKita?</h3>
            <ul style={styles.list}>
                <li style={styles.listItem}>
                    <CardMembershipIcon style={styles.icon} />
                    Flexible Membership Plans</li>
                <li style={styles.listItem}>
                    <MeetingRoomIcon style={styles.icon} />
                    Flexible Modern Workspaces</li>
                <li style={styles.listItem}>
                    <LockIcon style={styles.icon} />
                    Private rooms</li>
                <li style={styles.listItem}>
                    <WifiIcon style={styles.icon} />
                    High-Speed Internet</li>
            </ul>
            
            <div style={styles.buttonContainer}>
                <Link to="/booking">
                <button style={styles.button}>Book Now</button>
                </Link>
            </div>
            
        </div>
    );
}

export default Home