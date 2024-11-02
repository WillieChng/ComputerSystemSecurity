// import React from 'react';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Booking.css';
import SummarizeIcon from '@mui/icons-material/Summarize';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PaymentIcon from '@mui/icons-material/Payment';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckIcon from '@mui/icons-material/Check';

export default function Booking() {
    const [currentSlide, setCurrentSlide] = useState(0); // for slider
    const [selectedChoices, setSelectedChoices] = useState({
        package: null,
        plan: null,
        slot: null,
    }); // for selected choices
    const [value] = useState(new Date());  //calendar

    useEffect(() => {   // Fade-out effect
        // Remove the fade-out class when the component mounts
        document.body.classList.remove('fade-out');
    }, []);

    //slider options b/w pax or group
    const handlePackageSelection = (packageType) => {
        setSelectedChoices({ ...selectedChoices, package: packageType });
        if (packageType === 'By pax') {
            setCurrentSlide(1); // Show slide 2
        } else if (packageType === 'By group') {
            setCurrentSlide(2); // Show slide 3
        }
    };

    const slides = [
                {
                    no: 1,
                    title: "Choose your package",
                    content: (
                    <div className='slideContainer'>
                        <div>
                            <h4>Don&apos;t see your preferred options? <Link to='/contact-us'>Contact us</Link> and we&apos;ll send a quote.</h4>
                            <div className='categories'>
                                <div className='category'>
                                    <h4 className='category-title-1'>By pax</h4>
                                    <button className={`packageButton ${selectedChoices.package === 'By pax' ? 'selected' : ''}`}onClick={() => handlePackageSelection('By pax')}>Select</button>
                                    <ul>
                                        <li> <CheckIcon /> High Speed Wifi/Internet</li>
                                        <li> <CheckIcon /> Utilities Included</li>
                                        <li> <CheckIcon /> Opening Hours (8:00-22:00)</li>
                                        <li> <CheckIcon /> Access to Kitchen Lounge</li>
                                    </ul>
                                </div>
                                <div className='category'>
                                    <h4 className='category-title-2'>By group</h4>
                                    <button className={`packageButton ${selectedChoices.package === 'By group' ? 'selected' : ''}`} onClick={() => handlePackageSelection('By group')}>Select</button>
                                    <ul>
                                        <li> <CheckIcon /> High Speed Wifi/Internet</li>
                                        <li> <CheckIcon /> Utilities Included</li>
                                        <li> <CheckIcon /> Opening Hours (8:00-22:00)</li>
                                        <li> <CheckIcon /> Access to Kitchen Lounge</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                },
                {
                    no: 2,
                    title: "Choose your plans",
                    content: (
                        <div className='slideContainer'>
                            <div className='slide2'>
                                <button className='plansButton' onClick={() => setSelectedChoices({ ...selectedChoices, plan: 'DAY PASS' })}>DAY PASS <br />RM 20 /day</button>
                                <button className='plansButton' onClick={() => setSelectedChoices({ ...selectedChoices, plan: 'WEEKLY PASS' })}>WEEKLY PASS (5days) <br/>RM 90 (10% OFF)</button>
                                <button className='plansButton' onClick={() => setSelectedChoices({ ...selectedChoices, plan: 'MONTHLY PASS' })}>MONTHLY PASS (20days) <br/>RM 340 (15% OFF)</button>
                            </div>
                        </div>
                    )
                },
                {
                    no: 2,
                    title: "Choose your plans",
                    content: (
                    <div className='slideContainer'>
                        <div className='slide3'>
                            <button className='plansButton' onClick={() => setSelectedChoices({ ...selectedChoices, plan: 'DAY PASS' })}>DAY PASS <br />RM 180 /day</button>
                            <button className='plansButton' onClick={() => setSelectedChoices({ ...selectedChoices, plan: 'WEEKLY PASS' })}>WEEKLY PASS (5days) <br/>RM 765 (15% OFF)</button>
                            <button className='plansButton' onClick={() => setSelectedChoices({ ...selectedChoices, plan: 'MONTHLY PASS' })}>MONTHLY PASS (20days) <br/>RM 2720 (20% OFF)</button>
                        </div>
                    </div>
                    )
                },
                {
                    no: 4,
                    title: "Choose your slot",
                    content: (
                        <div className='slideContainer'>
                            <div className='slide4'>
                                <div className='calendar'>
                                    <Calendar onChange={(date) => setSelectedChoices({ ...selectedChoices, slot: date })} value={value} />
                                </div>
                            </div>
                        </div>
                    )
                }
        ];

    const nextSlide = () => {
        // If the current slide is 1 and the package is 'By pax', skip to slide 4
        if (currentSlide === 1 && selectedChoices.package === 'By pax') {
            setCurrentSlide(3); // Skip to slide 4
        // If the current slide is 2 and the package is 'By group', skip to slide 4
        } else if (currentSlide === 2 && selectedChoices.package === 'By group') {
            setCurrentSlide(3); // Skip to slide 4
        } else {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    }

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const getSelectedSlides = () => {
        const selectedSlides = [];
        if (selectedChoices.package) selectedSlides.push(0);
        if (selectedChoices.plan) selectedSlides.push(1);
        if (selectedChoices.slot) selectedSlides.push(3);
        return selectedSlides;
    };
    
    return (
        <div className='container'>
            <h1 className='how-title'>How CollabKita Works?</h1>
            <div className='how-container'>
                <div className='how-1'>
                    <div className='how-1-image'>
                        <SummarizeIcon className="summarize-icon" fontSize="large" />
                    </div>
                    <div className='how-1-no'>
                        01
                    </div>
                    <div className='how-1-text'>
                        <h4>Choose package & plan</h4>
                        <p>Choose your choice of package followed by the plan</p>
                    </div>
                </div>
                <div className='how-2'>
                    <div className='how-2-image'>
                        <CalendarMonthIcon className="calendar-icon" fontSize="large"/>
                    </div>
                    <div className='how-2-no'>
                        02
                    </div>
                    <div className='how-2-text'>
                        <h4>Select preferred slot</h4>
                        <p>Save your date now or later!</p>
                    </div>
                </div>
                <div className='how-3'>
                    <div className='how-3-image'>
                        <PaymentIcon className="payment-icon" fontSize="large"/>
                    </div>
                    <div className='how-3-no'>
                        03
                    </div>
                    <div className='how-3-text'>
                        <h4>Pay & Confirm</h4>
                        <p>Complete payment and receive booking details in your email</p>
                    </div>
                </div>
                <div className='how-4'>
                    <div className='how-4-image'>
                        <AddReactionIcon className="reaction-icon" fontSize="large"/>
                    </div>
                    <div className='how-4-no'>
                        04
                    </div>
                    <div className='how-4-text'>
                        <h4>Get work done!</h4>
                        <p>Arrive to CollabKita and get your work done!</p>
                    </div>
                </div>
            </div>
            <button className='button-book'>Book Now</button>

            <div className='slider'>
                <div className='slide-header'>
                <span className='slide-no'>{slides[currentSlide].no}</span>
                <h1 className='slide-title' key={`slide${currentSlide}-title`}>{slides[currentSlide].title}</h1>
                </div>
                {slides[currentSlide].content}
                <div className='navigation-buttons'>
                    <button className='button-prev' onClick={prevSlide}><ArrowBackIosIcon /></button>
                    <button className='button-next' onClick={nextSlide}><ArrowForwardIosIcon/></button>
                </div>
                {(selectedChoices.package || selectedChoices.plan || selectedChoices.slot ) && (
                <div className='slide-options'>
                    {getSelectedSlides().map((slideIndex) => (
                        <button key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                            {slides[slideIndex].no}
                        </button>
                    ))}
                </div>
                )}
            </div>

            <div className='selected-choices'>
                {selectedChoices.package && <p>Selected Package: {selectedChoices.package}</p>}
                {selectedChoices.plan && <p>Selected Plan: {selectedChoices.plan}</p>}
                {selectedChoices.slot && <p>Selected Slot: {selectedChoices.slot.toDateString()}</p>}
            </div>
            <div className='buttonContainer'>
                <Link to="/aboutus">
                <button className='button'>About Us</button>
                </Link>
            </div>
        </div>
    );
}