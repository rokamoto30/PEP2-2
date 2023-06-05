import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/home.css';
import tutor from '../images/tutor-home.jpeg';

const Home = (props) => {
     // const { username } = props?.location?.state ?? {};
    return (
        <section className='whole-body'>
            <section className='header'>
                <div className="home-logo">
                    <hr className="home-top-line"/>
                    <div className="logo-line">
                        <hr className="home-vertical-line"/>
                        <p className="text-logo">Mara <br/> Tutoring</p>
                    </div>
                    <hr className="home-bottom-line"/>
                </div>
                <div className="home-navigation-div">
                    <nav className="navbar navbar-expand-lg bg-light navigation top-nav">
                        <Link className="nav-link btn links" to="/signup">Login</Link>
                    </nav>
                </div>
            </section>
            
            <section className="home-body">
               <div className="left-div">
                    <h2>World Class Tutoring Network</h2>
                    <hr className='hr-title'/>
                    <p className="body-text">Here at Mara Tutoring, we link you up with a tutor that you feel is best fit for you with an endless amount of subjects. </p>
                    <div className="started"><Link className="get-started" to="/signup">Get Started</Link></div>
                </div> 
                <div className='right-div'>
                    <img src={tutor} alt="Tutoring Session" className='tutoring'/>
                </div>
            </section>
        </section>
        
    );
};

export default Home;