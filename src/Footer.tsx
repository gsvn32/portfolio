
import React from 'react';
import './Footer.css'
import { useEffect, useState } from 'react';
function Footer () {

    

    return (
        <footer className="footer">
        <div id='contact'>
        <h3>Contact</h3>
        <h5>Nikhil Gangisetty</h5>
        <a href="mailto:gangietty.nikhil@gmail.com" title="send email">gangietty.nikhil@gmail.com</a>
        <p>+1 913-709-9391</p>
        </div>
        <div id='address'>
            <h3>Address</h3>
            <p>301 W Armour blvd</p>
            <p>Kansas City, MO</p>
        </div>
        <div>
        <p className='copyright'>&copy; <span id="currentYear"></span> Nikhil Gangisetty. All rights reserved.| <a href="https://www.flaticon.com/" title="icons" className='credit'>Credits</a>
        </p>
        </div>
        <script>
        document.getElementById('currentYear').textContent = new Date().getFullYear();
        </script>
        </footer>
        );
};

export default Footer

