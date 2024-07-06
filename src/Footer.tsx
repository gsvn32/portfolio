import React, { useEffect } from 'react';
import './Footer.css';

function Footer() {
    useEffect(() => {
        const yearElement = document.getElementById('currentYear');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear().toString();
        }
    }, []);
    return (
        <footer className="footer">
            <div id='contact'>
                <h3>Contact</h3>
                <h5>Nikhil Gangisetty</h5>
                <a href="mailto:gangietty.nikhil@gmail.com" title="Send email" aria-label="Email">
                    <i className="fas fa-envelope"></i> gangietty.nikhil@gmail.com
                </a>
                <p>+1 913-709-9391</p>
                <div className="social-links">
                    <a href="https://github.com/gsvn32" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/nikhilgangisetty" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="mailto:gangietty.nikhil@gmail.com" aria-label="Email">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
            <div id='address'>
                <h3>Address</h3>
                <p>301 W Armour Blvd</p>
                <p>Kansas City, MO</p>
            </div>
            <div>
                <p className='copyright'>
                    &copy; <span id="currentYear"></span> Nikhil Gangisetty. All rights reserved. | <a href="https://www.flaticon.com/" title="icons" className='credit'>Credits</a>
                </p>
            </div>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="scroll-to-top" aria-label="Scroll to top">
                <i className="fas fa-arrow-up"></i>
            </button>
        </footer>
    );
}

export default Footer;
