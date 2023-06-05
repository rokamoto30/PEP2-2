import React from 'react';
import cloud from '../images/tutoring.jpeg';
import { Link } from 'react-router-dom';
import './CSS/about.css';
const About = () => {
    return (
        <section>                
             <section className='section-about'>        
                <div className='left-side'>
                    <h4 className='tutor'>Lets find a tutor <br/>that matches your needs.</h4>
                    <img className='about-image' src={cloud} alt="Default"/>
                </div>
                <div className='about-us'>         
                    <h2>About Us</h2>
                    <p>Here at Mara Tutoring, we match you with a student or a tutor depending on what your needs are. After you completed your session, we suggest you rate your tutor based on your experience. </p>
                    <p>We offer a variety of subjects that you can choose from with no limits on grade level. Anybody can be tutored on here from elementary school level up to post college graduate school levels. </p>
                    <p>Anybody can be a tutor as long as you show proof that you have completed that course with a passing grade. For example, if you're a college student looking for a way to earn a bit of extra money, you can tutor a middle school student in any subject that you are most comfortable in. 90% of the money goes to you with a 10% service fee. </p>
                    <div class="learn-div">
                        <div class="learn"> <Link class="learn-text" to="/Developers">Learn More</Link></div>
                        <div className="arrow">&#8594;</div>
                    </div>
                </div>
                </section>
        </section>
    )
}

export default About;