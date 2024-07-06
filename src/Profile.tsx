import React, { useState } from 'react';
import './Profile.css';

function Profile() {
    const [isPaused, setIsPaused] = useState(false);

    const handleMouseOver = () => {
        setIsPaused(true);
    };

    const handleMouseOut = () => {
        setIsPaused(false);
    };

    const handleFocus = () => {
        setIsPaused(true);
    };

    const handleBlur = () => {
        setIsPaused(false);
    };

    return (
        <header className="profile" role="banner">
            <div className="profile-picture" tabIndex={0} aria-label="Profile Picture">
                <img src="./profile.jpeg" className="profile-img" alt="Profile Picture" />
            </div>
            <h3 className="heading-name" tabIndex={0} aria-label="heading name">VENKATA NIKHIL GANGISETTY</h3>
            <section className="heading-name" tabIndex={0} aria-labelledby="profile-description">
                <p id="profile-description">
                    A full-stack developer with a Master's in Computer Science and experience at Honeywell. I excel in UI/UX design, web accessibility (WCAG), and coding in HTML, CSS, JavaScript, and Drupal. My certifications in User Experience Design, Accessibility (WCAG 2.2), and Drupal module development complement my practical experience.
                </p>
            </section>
            <div 
                className={`certification-banner ${isPaused ? 'paused' : ''}`}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onFocus={handleFocus}
                onBlur={handleBlur}
                tabIndex={0}
                aria-label="Certifications"
            >
               <div className="card" tabIndex={0} aria-label="Certification: User Experience Design"><span className="card-content">User Experience Design & User Interface Design Fundamentals - Udemy</span></div>
               <div className="card" tabIndex={0} aria-label="Certification: Drupal module development"><span className="card-content">Drupal 8 & 9 module development: start with custom entities -Udemy</span></div>
               <div className="card" tabIndex={0} aria-label="Certification: Accessibility (WCAG 2.2)"><span className="card-content">How To Design for Accessibility: for UX Designers (WCAG 2.2) -Udemy</span></div>
                
            </div>
        </header>
    );
}

export default Profile;
