import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  // TypeScript to add scroll animations
  document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.timeline .container') as NodeListOf<HTMLElement>;
  
    const isInViewport = (el: HTMLElement): boolean => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
  
    const run = () => {
      items.forEach(item => {
        if (isInViewport(item)) {
          item.classList.add('show');
        } else {
          item.classList.remove('show');
        }
      });
    };
  
    // Run the function on load and scroll
    window.addEventListener('load', run);
    window.addEventListener('resize', run);
    window.addEventListener('scroll', run);
  });
  
  return (
    <div className="App">
      <header className="App-header">
<nav aria-label="Main Navigation">
        <ul className="nav-list">
            <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#about" className="nav-link">Contact</a></li>
            <li className="nav-item"><a href="#services" className="nav-link">Experience</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Projects</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Design Info</a></li>
        </ul>
    </nav>
    <div className="profile-picture">
        <img src="./profile.jpeg" className="profile-img" alt="Profile Picture"></img>   
    </div>
    <h3 className='heading-name'> VENKATA NIKHIL GANGISETTY </h3>
      <section className="heading-name">
      
      <p>Full-Stack Development: Proficient in Frontend development (HTML, Cascading Style Sheets (CSS), React) and
back-end frameworks (Spring Boot, Java).
• Experience in developing and managing databases, including Oracle PL/SQL, MySQL, and MongoDB.
• Version Control & Collaboration: Extensive experience using Git for version control system and collaboration on
software projects.
• Problem-Solving & Debugging: Demonstrated ability in identifying and solving complex production problems
efficiently.
• Security & Performance Optimization: Focus on building secure applications with optimized performance and
scalability.</p>
    </section>
      </header>
      <main className="App-main">
      <div className="timeline">
    <div className="left">
      <div className="content">
        <h2>2018</h2>
        <p>Started my career at XYZ Company as a Junior Developer. Worked on various frontend and backend tasks.</p>
      </div>
    </div>
    <div className="right">
      <div className="content">
        <h2>2019</h2>
        <p>Promoted to Developer at XYZ Company. Led a team to develop a web application that increased user engagement by 20%.</p>
      </div>
    </div>
    <div className="left">
      <div className="content">
        <h2>2020</h2>
        <p>Joined ABC Corp as a Senior Developer. Worked on cloud-based solutions and microservices architecture.</p>
      </div>
    </div>
    <div className="right">
      <div className="content">
        <h2>2021</h2>
        <p>Started a major project on AI and machine learning which resulted in a successful product launch.</p>
      </div>
    </div>
    <div className="left">
      <div className="content">
        <h2>2022</h2>
        <p>Worked on improving the performance of legacy systems, reducing the load time by 30%.</p>
      </div>
    </div>
    <div className="right">
      <div className="content">
        <h2>2023</h2>
        <p>Joined DEF Inc as a Lead Developer. Focused on innovative solutions and team leadership.</p>
      </div>
    </div>
    <div className="left">
      <div className="content">
        <h2>2024</h2>
        <p>Continuing my journey at DEF Inc, working on cutting-edge technologies and mentoring junior developers.</p>
      </div>
    </div>
  </div>

      </main>
      <footer className="App-footer"><h1>Footer</h1>
      
      </footer>
    </div>
  );
}

export default App;
