import React, { useEffect } from 'react';
import './Footer.css';

function Footer() {
    useEffect(() => {
        const yearElement = document.getElementById('currentYear');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear().toString();
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
             <button onClick={scrollToTop} className="scroll-to-top" aria-label="Scroll to top">Top</button>
            <div id='contact'>
                <h3>Contact</h3>
                <h5>Nikhil Gangisetty</h5>
                <a href="mailto:gangietty.nikhil@gmail.com" title="send email">gangietty.nikhil@gmail.com</a>
                <p>+1 913-709-9391</p>
            </div>
            <div id='address'>
                <h3>Address</h3>
                <p>301 W Armour Blvd</p>
                <p>Kansas City, MO</p>
            </div>
            <div>
                <p className='copyright'>
                    &copy; <span id="currentYear"></span> Nikhil Gangisetty. All rights reserved. | 
                    <a href="https://www.flaticon.com/" title="icons" className='credit'>Credits</a>
                </p>
            </div>
           
        </footer>
    );
}

export default Footer;
