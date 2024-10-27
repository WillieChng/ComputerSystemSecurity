import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function Booking() {
    const [value, onChange] = useState<Value>(new Date());
    const styles = {
        container: {
            textAlign: 'center', 
            padding: '20px',
        },
        orderedList: {
            listStylePosition: 'inside',
        },
        packageContainer: {
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
        },
        packageButton: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid black',
            borderRadius: '7px',
            height: '50px',
            width: '100px',
            cursor: 'pointer',
        },
        plansContainer: {
            display: 'flex', 
            justifyContent: 'space-around',
        },
        plansButton: {
            display: 'flex',
            alignItems: 'center', 
            justifyContent: 'center',
            border: '1px solid black',
            borderRadius: '7px',
            height: '100px',
            width: '185px',
            cursor: 'pointer',
        },
        calendarContainer: {
            display: 'flex',
            justifyContent: 'space-around',
        },
        calendar: {
            display: 'flex',
            alignItems: 'center',
            borderRadius: '7px',
        },
        buttonContainer:{
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
        },
        button: {
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#558d57',
            borderRadius: '10px',
            cursor: 'pointer',
        }
    }
    return (
        <div style={styles.container}>
            <h1>How CollabKita Works?</h1>
            <ol style={styles.orderedList}>
                <li>Choose your package</li>
                <li>Select your plan</li>
                <li>Select your preferred slot</li>
                <li>Complete payment and received email confirmation</li>
                <li>Arrive to CollabKita and get your work done!</li>
            </ol>
            <h1>Choose your package</h1>
            <h4>Don't see your preferred options? Contact us and we'll send a quote.</h4>
            <div style={styles.packageContainer}>
                <button style={styles.packageButton}>
                    By pax
                </button>
                <button style={styles.packageButton}>
                    By group
                </button>
            </div>
            <h1>Choose your plans</h1>
            <div style={styles.plansContainer}>
                <button style={styles.plansButton}>
                    DAY PASS <br />
                    RM 20 /day
                </button>
                <button style={styles.plansButton}>
                    WEEKLY PASS (5days) <br/>
                    RM 90 (10% OFF)
                    </button>
                <button style={styles.plansButton}>
                    MONTHLY PASS (20days) <br/>
                    RM 340 (15% OFF)
                    </button>
            </div>

            <div style={styles.plansContainer}>
                <button style={styles.plansButton}>
                    DAY PASS <br />
                    RM 180 /day
                </button>
                <button style={styles.plansButton}>
                    WEEKLY PASS (5days) <br/>
                    RM 765 (15% OFF)
                    </button>
                <button style={styles.plansButton}>
                    MONTHLY PASS (20days) <br/>
                    RM 2720 (20% OFF)
                    </button>
            </div>

            <h1>Choose your slot</h1>
            <div style={styles.calendarContainer}>
                <div style={styles.calendar}>
                <Calendar onChange={onChange} value={value} />
            </div>
            </div>
            
            <div style={styles.buttonContainer}>
                <Link to="/aboutus">
                <button style={styles.button}>About Us</button>
                </Link>
            </div>
        </div>
    );
}

export default Booking;