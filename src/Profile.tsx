import React from 'react';
import './Profile.css'

function Profile () {
    return (
    <header className="profile">
    <div className="profile-picture">
        <img src="./profile.jpeg" className="profile-img" alt="Profile Picture"></img>   
    </div>
    <h3 className='heading-name'> VENKATA NIKHIL GANGISETTY </h3>
        <section className="heading-name">
        <p> A full-stack developer with a Master's in Computer Science and experience at Honeywell. I excel in UI/UX design, web accessibility (WCAG), and coding in HTML, CSS, JavaScript, and Drupal. My certifications in User Experience Design, Accessibility (WCAG 2.2), and Drupal module development complement my practical experience</p>
    </section>
        </header>
    );
};

export default Profile

