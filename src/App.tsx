import React from 'react';
import './App.css';
import  Navbar from './Navbar'
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
    <div className="profile-picture">
        <img src="./profile.jpeg" className="profile-img" alt="Profile Picture"></img>   
    </div>
    <h3 className='heading-name'> VENKATA NIKHIL GANGISETTY </h3>
      <section className="heading-name">
      <p> A full-stack developer with a Master's in Computer Science and experience at Honeywell. I excel in UI/UX design, web accessibility (WCAG), and coding in HTML, CSS, JavaScript, and Drupal. My certifications in User Experience Design, Accessibility (WCAG 2.2), and Drupal module development complement my practical experience</p>
    </section>
      </header>
      <main className="App-main">
      <div className="timeline">
      <div className="container left">
    <img src="./education.png" alt="university icon" />
      <div className="content">
        <h2>University of Missouri - Kansas City</h2>
        <small>2023-2024: Master of Science in Computer Science </small>
        <p>GPA: 3.8/4.0, Relevent Coursework in Distributed Computing, Advanced operating systems, Design and Analysis of Algorithms, Network
        Architecture</p>
        <span className='left-arrow'></span>
      </div>
    </div>
    <div className="container right" id='project'>
    <img src="./project.png" alt="project icon" />
      <div className="content">
        <h2>TravelDjango (Python/Django)</h2>
       <small>2024: Python, Django, JavaScript, MongoDB/MySQL, API, Git, Weather API</small>  
        <p>A travel planning application that streamlines itinerary creation for tourists. Users can search destinations, receive real-time weather information, and build customized routes with various transportation options. </p>
        <span className='right-arrow'></span>
      </div>
    </div>
      <div className="container left">
    <img src="./work.png" alt="work icon" />
      <div className="content">
        <h2>UMKC ACED</h2>
        <small>2024</small>
        <p>Maintained and troubleshooted classroom computers, ensuring smooth operations under challenging conditions. Provided warm and caring instruction to students with various mental and physical disabilities. Praised for problem-solving skills, hard work, and a positive attitude in a dynamic educational environment.</p>
        <span className='left-arrow'></span>
      </div>
    </div>
     
    <div className="container right">
    <img src="./project.png" alt="project icon" />
      <div className="content">
        <h2>GameMaster: A gamified task manager built in Next.js.</h2>
        <small>2023: Node.js, React, TypeScript, MongoDB, GitHub Actions,HTML,CSS</small>
    <p>Developed a full stack application enhancing user productivity through gamification. Designed and implemented user-friendly interfaces and interactive features.Optimized backend and frontend performance to ensure seamless user experiences.</p>
        <span className='right-arrow'></span>
      </div>
    </div>
    <div className="container left">
    <img src="./project.png" alt="project icon" />
      <div className="content">
        <h2>CaptionIt - Cloud based AI Image Captioning web Application</h2>
        <small>Pytorch, django, Azure</small>
    <p>Generate Descriptive and meaningful descriptions for Images. Developed using pre trained ML model and python Django for web development on Azure.</p>
         <span className='left-arrow'></span>
      </div>
    </div>
    <div className="container right" id='experience'>
    <img src="./work.png" alt="work icon" />
      <div className="content">
        <h2>Honeywell</h2>
        <small>2019-2022</small>
        <p>As a Sr. Software Engineer at Honeywell (June 2019 – Dec 2022), I developed Single Page Applications (SPAs) using React, incorporating HTML and CSS to create dynamic and responsive user interfaces focusing on optimizing the user experience and performance, ensuring high-quality web applications.I led the development of MVC applications using Spring Boot and AWS, designed complex SQL queries, and implemented CI/CD pipelines with GitHub and Jenkins.</p>
        <span className='right-arrow'></span>
      </div>
    </div>
    <div className="container left">
    <img src="./project.png" alt="project icon" />
      <div className="content">
        <h2>TaskMaster To-Do App</h2>
        <small>2019</small>
        <p>
        Developed TaskMaster, a responsive and user-friendly To-Do application. Leveraged CSS (45.8%) for styling and layout, JavaScript (40.1%) for task management and interactivity, and HTML (14.1%) for structuring content. The app allows users to efficiently add, edit, and delete tasks, enhancing productivity and organization.
        </p>
        <span className='left-arrow'></span>
      </div>
    </div>
    <div className=" container right">
    <img src="./work.png" alt="work icon" />
      <div className="content">
      <h2>Infosys Ltd.</h2>
      <small>2018-2019</small>
        <p>As a Software Developer Intern at Infosys, I utilized HTML and CSS along with JavaScript and AJAX to design and build a web application for Exam Monitor. This project involved creating intuitive and accessible web interfaces, enhancing the overall usability and functionality of the application.</p>
        <span className='right-arrow'></span>
      </div>
    </div>
    <div className="container left">
    <img src="./education.png" alt="university icon" />
      <div className="content">
        <h2>Sastra University</h2>
        <small>2015-2019: Bachelor of Science in Information Technology</small>
        <p>Relevent Coursework in Software development and design principles, web development, computer networking, programming languages</p>
        <span className='left-arrow'></span>
      </div>
    </div>
  </div>
      </main>
      <Footer />
    </div>
  );
}
export default App;
