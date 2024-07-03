import React from 'react';
import './Navbar.css'
import { useEffect, useState } from 'react';
function Navbar () {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`navbar ${isScrolled ? 'fixed' : ''}`}>
            
                <nav aria-label="Main Navigation">
          <ul className="nav-list">
              <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="#experience" className="nav-link">Experience</a></li>
              <li className="nav-item"><a href="#project" className="nav-link">Projects</a></li>
              <li className="nav-item"><a href="#contact" className="nav-link">Design Info</a></li>
              <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
              <li className="nav-item"><a href="#address" className="nav-link">Address</a></li>
          </ul>
        </nav>
            
        </header>
    );
};

export default Navbar

