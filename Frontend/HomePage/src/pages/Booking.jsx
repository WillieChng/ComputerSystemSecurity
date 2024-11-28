import { useEffect, useRef, useState } from 'react';
import {Link} from 'react-router-dom';
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
import team from '../public/team.jpg';
import personal from '../public/private.jpg';
import pantry1 from '../public/pantry1.jpg';
import pantry2 from '../public/pantry2.jpg';
import pantry3 from '../public/pantry3.jpg';
import { FaToilet } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { TiWiFi } from "react-icons/ti";
import { AiFillPrinter } from "react-icons/ai";
import { MdSupportAgent } from "react-icons/md";

export default function Booking() {
    const [currentSlide, setCurrentSlide] = useState(0); // for slider
    const [selectedChoices, setSelectedChoices] = useState({});
    const [value] = useState(new Date());  //calendar
    const howItWorksRef = useRef(null);
    const whatWeProvideRef = useRef(null);
    const bookNowRef = useRef(null);
    const [activeToc, setActiveToc] = useState(null);

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
                            <button className='plansButton' onClick={() => handleSelection('pax')}>By Pax</button>
                            <ul>
                                <li> <CheckIcon /> High Speed Wifi/Internet</li>
                                <li> <CheckIcon /> Utilities Included</li>
                                <li> <CheckIcon /> Opening Hours (8:00-22:00)</li>
                                <li> <CheckIcon /> Access to Kitchen Lounge</li>
                            </ul>
                        </div>
                        <div className='category'>
                            <h4 className='category-title-2'>By group</h4>
                            <button className='plansButton' onClick={() => handleSelection('group')}>By Group</button>
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
                    <button className='plansButton' onClick={() => handlePlanSelection('DAY PASS')}>DAY PASS <br />RM 20 /day</button>
                    <button className='plansButton' onClick={() => handlePlanSelection('WEEKLY PASS')}>WEEKLY PASS (5days) <br/>RM 90 (10% OFF)</button>
                    <button className='plansButton' onClick={() => handlePlanSelection('MONTHLY PASS')}>MONTHLY PASS (20days) <br/>RM 340 (15% OFF)</button>
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
                    <button className='plansButton' onClick={() => handlePlanSelection('DAY PASS')}>DAY PASS <br />RM 180 /day</button>
                    <button className='plansButton' onClick={() => handlePlanSelection('WEEKLY PASS')}>WEEKLY PASS (5days) <br/>RM 765 (15% OFF)</button>
                    <button className='plansButton' onClick={() => handlePlanSelection('MONTHLY PASS')}>MONTHLY PASS (20days) <br/>RM 2720 (20% OFF)</button>
                </div>
            </div>
            )
        },
        {
            no: 3,
            title: "Choose your slot",
            content: (
                <div className='slideContainer'>
                    <div className='slide4'>
                        <div className='calendar'>
                            <Calendar 
                            onChange={(date) => setSelectedChoices({ ...selectedChoices, slot: date })} 
                            value={value}
                            minDate={new Date()} // Prevent selecting dates before today
                            />
                        </div>
                    </div>
                </div>
            )
        }
    ];

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log(`Intersecting: ${entry.target.id}`);
                    setActiveToc(entry.target.id);
                    if (entry.target.id === 'what-we-provide') {
                        whatWeProvideRef.current.classList.add('fly-in');
                    }
                }
            });
        };
    
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        });
    
        const sections = [howItWorksRef.current, whatWeProvideRef.current, bookNowRef.current];
        sections.forEach(section => {
            if (section) {
                observer.observe(section);
                console.log(`Observing: ${section.id}`);
            }
        });
    
        return () => {
            sections.forEach(section => {
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, []);

    useEffect(() => {   // Fade-out effect
        // Remove the fade-out class when the component mounts
        document.body.classList.remove('fade-out');
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    whatWeProvideRef.current.classList.add('fly-in');
                    observer.unobserve(whatWeProvideRef.current); // Stop observing after animation
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        const currentRef = whatWeProvideRef.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const handleTocClick = (ref, id) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
        if (ref.current) {
            ref.current.classList.remove('fly-in');
            // Trigger reflow to restart the animation
            // Trigger reflow
            void ref.current.offsetWidth;
            ref.current.classList.add('fly-in');
        }
        setActiveToc(id);
    };

    //slider options b/w pax or group
    const handleSelection = (type) => {
        setSelectedChoices({ ...selectedChoices, type });
        if (type === 'pax') {
            setCurrentSlide(1); // Navigate to slide 2 for Pax
        } else if (type === 'group') {
            setCurrentSlide(2); // Navigate to slide 3 for Group
        }
    };

    const handlePlanSelection = (plan) => {
        setSelectedChoices({ ...selectedChoices, plan });
        setCurrentSlide(3); // Navigate to calendar slide
    };
    
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    }

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const getSelectedSlides = () => {
        const selectedSlides = [];
        if (selectedChoices.type) {
            selectedSlides.push(0);
        }
        if (selectedChoices.plan) {
            selectedSlides.push(1);
        }
        if (selectedChoices.slot) {
            selectedSlides.push(3);
        }
        return selectedSlides;
    };

    const handleBookNow = async () => {
        if (!selectedChoices.type || !selectedChoices.plan || !selectedChoices.slot) {
            alert('Please select all options before booking');
        } else {
            console.log('Booking:', selectedChoices);
            try {
                const response = await fetch('/api/bookNow', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(selectedChoices),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log('Booking successful:', data);
                // Handle successful booking (e.g., show a success message, redirect, etc.)
            } catch (error) {
                console.error('Error booking:', error);
                // Handle error (e.g., show an error message)
            }
        }
    };

    return (
        <div className='container'>
                <div className='toc'>
                    <ul>
                        <li className={`${activeToc === 'how-it-works' ? 'active bold' : ''}`}>
                            <a href="#how-it-works" onClick={() => handleTocClick(howItWorksRef, 'how-it-works')}>How CollabKita Works?</a>
                        </li>
                        <li className={`${activeToc === 'what-we-provide' ? 'active bold' : ''}`}>
                            <a href="#what-we-provide" onClick={() => handleTocClick(whatWeProvideRef, 'what-we-provide')}>What CollabKita provides</a>
                        </li>
                        <li className={`${activeToc === 'book-now' ? 'active bold' : ''}`}>
                            <a href="#book-now" onClick={() => handleTocClick(bookNowRef, 'book-now')}>Book Now</a>
                        </li>
                    </ul>
                </div>
                <h1 className='how-title'id='how-it-works' ref={howItWorksRef}>How CollabKita Works?</h1>
                <div className='how-container'>
                    <div className='how-row-1'>
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
                    </div>
                    <div className='how-row-2'>
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
                </div>
                <div className='provide-container' ref={whatWeProvideRef} id='what-we-provide'>
                    <h1 className='provide-title'>What CollabKita provides</h1>
                    <div className='provide-1'>
                        <div>
                            <h2 className='where1'>for group</h2>
                            <img src={team} alt='Team' className='team'/>
                        </div>
                        <div>
                            <h2 className='where1'>for private</h2>
                            <img src={personal} alt='Private' className='private'/>
                        </div>
                    </div>
                        <div className='provide-2'>
                            <h2 className='pantry-title'>Pantry for everyone</h2>
                            <div className='pantry'>
                                <img src={pantry1} alt='Pantry-1' className='pantry1'/>
                                <img src={pantry2} alt='Pantry-2' className='pantry2'/>
                                <img src={pantry3} alt='Pantry-3' className='pantry3'/>
                            </div>
                        </div>
                        <div className='utilities'>
                            <h2>Utilities provided</h2>
                            <FaToilet className='large-icon' alt='toilet'/>
                            <TbAirConditioning className='large-icon'/>
                            <TiWiFi className='large-icon'/>
                            <AiFillPrinter className='large-icon'/>
                            <MdSupportAgent className='large-icon'/>
                        </div>
                </div>
             <button className='button-book' id='book-now' ref={bookNowRef} onClick={handleBookNow}>Book Now</button>

                <div className='slider'>
                    {Object.keys(selectedChoices).length > 0 && (
                    <div className='selected-choices'>
                        <ol>
                            {selectedChoices.type && (
                                <li>
                                    <p><strong>Selected Type: </strong>{selectedChoices.type}</p>
                                </li>
                            )}
                            {selectedChoices.plan && (
                                <li>
                                    <p><strong>Selected Plan: </strong>{selectedChoices.plan}</p>
                                </li>
                            )}
                            {selectedChoices.slot && (
                                <li>
                                    <p><strong>Selected Slot: </strong>{selectedChoices.slot.toDateString()}</p>
                                </li>
                            )}
                        </ol>
                    </div>
                    )}

                    <div className='slide-header'>
                        <span className='slide-no'>{slides[currentSlide].no}</span>
                    <h1 className='slide-title' key={`slide${currentSlide}-title`}>{slides[currentSlide].title}</h1>
                    </div>
                        {slides[currentSlide].content}
                        <div className='navigation-buttons'>
                            <button className='button-prev' onClick={prevSlide}><ArrowBackIosIcon /></button>
                            <button className='button-next' onClick={nextSlide}><ArrowForwardIosIcon/></button>
                        </div>
                    {(selectedChoices.type || selectedChoices.plan || selectedChoices.slot ) && (
                    <div className='slide-options'>
                        {getSelectedSlides().map((slideIndex) => (
                            <button key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                                {slides[slideIndex].no}
                            </button>
                        ))}
                    </div>
                    )}
                </div>
        </div>
    );
}