import React from 'react';
import './Timeline.css';

function Timeline() {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, id: string) => {
        if (event.key === 'Enter') {
            const element = document.getElementById(id);
            if (element) {
                element.focus();
            }
        }
    };

    return (
        <main className="App-main" role="main">
            <div className="timeline">
                <div className="container left" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, 'umkc-title')}>
                    <img src="./education.png" alt="University Icon" />
                    <div className="content" role="article" aria-labelledby="umkc-title" id="umkc-title" tabIndex={-1}>
                        <h2>University of Missouri - Kansas City</h2>
                        <small>2023-2024: Master of Science in Computer Science</small>
                        <p>GPA: 3.8/4.0, Relevant Coursework in Distributed Computing, Advanced operating systems, Design and Analysis of Algorithms, Network Architecture</p>
                        <span className='left-arrow' aria-hidden="true"></span>
                    </div>
                </div>
                <div className="container right" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, 'travel-django-title')} id='project'>
                    <img src="./project.png" alt="Project Icon" />
                    <div className="content" role="article" aria-labelledby="travel-django-title" id="travel-django-title" tabIndex={-1}>
                        <h2>TravelDjango (Python/Django)</h2>
                        <small>2024: Python, Django, JavaScript, MongoDB/MySQL, API, Git, Weather API</small>
                        <p>A travel planning application that streamlines itinerary creation for tourists. Users can search destinations, receive real-time weather information, and build customized routes with various transportation options.</p>
                        <span className='right-arrow' aria-hidden="true"></span>
                    </div>
                </div>
                <div className="container left" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, 'umkc-aced-title')}>
                    <img src="./work.png" alt="Work Icon" />
                    <div className="content" role="article" aria-labelledby="umkc-aced-title" id="umkc-aced-title" tabIndex={-1}>
                        <h2>UMKC ACED</h2>
                        <small>2024</small>
                        <p>Maintained and troubleshooted classroom computers, ensuring smooth operations under challenging conditions. Provided warm and caring instruction to students with various mental and physical disabilities. Praised for problem-solving skills, hard work, and a positive attitude in a dynamic educational environment.</p>
                        <span className='left-arrow' aria-hidden="true"></span>
                    </div>
                </div>
                <div className="container right" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, 'game-master-title')}>
                    <img src="./project.png" alt="Project Icon" />
                    <div className="content" role="article" aria-labelledby="game-master-title" id="game-master-title" tabIndex={-1}>
                        <h2>GameMaster: A gamified task manager built in Next.js</h2>
                        <small>2023: Node.js, React, TypeScript, MongoDB, GitHub Actions, HTML, CSS</small>
                        <p>Developed a full stack application enhancing user productivity through gamification. Designed and implemented user-friendly interfaces and interactive features. Optimized backend and frontend performance to ensure seamless user experiences.</p>
                        <span className='right-arrow' aria-hidden="true"></span>
                    </div>
                </div>
                <div className="container left" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, 'caption-it-title')}>
                    <img src="./project.png" alt="Project Icon" />
                    <div className="content" role="article" aria-labelledby="caption-it-title" id="caption-it-title" tabIndex={-1}>
                        <h2>CaptionIt - Cloud-based AI Image Captioning web Application</h2>
                        <small>Pytorch, Django, Azure</small>
                        <p>Generate descriptive and meaningful descriptions for Images. Developed using pre-trained ML model and Python Django for web development on Azure.</p>
                        <span className='left-arrow' aria-hidden="true"></span>
                    </div>
                </div>
                <div className="container right" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, 'honeywell-title')} id='experience'>
                    <img src="./work.png" alt="Work Icon" />
                    <div className="content" role="article" aria-labelledby="honeywell-title" id="honeywell-title" tabIndex={-1}>
                        <h2>Honeywell</h2>
                        <small>2019-2022</small>
                        <p>As a Sr. Software Engineer at Honeywell (June 2019 – Dec 2022), I developed Single Page Applications (SPAs) using React, incorporating HTML and CSS to create dynamic and responsive user interfaces focusing on optimizing the user experience and performance, ensuring high-quality web applications. I led the development of MVC applications using Spring Boot and AWS, designed complex SQL queries, and implemented CI/CD pipelines with GitHub and Jenkins.</p>
                        <span className='right-arrow' aria-hidden="true"></span>
                    </div>
                </div>
                <div className="container left" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, 'taskmaster-title')}>
                    <img src="./project.png" alt="Project Icon" />
                    <div className="content" role="article" aria-labelledby="taskmaster-title" id="taskmaster-title" tabIndex={-1}>
                        <h2>TaskMaster To-Do App</h2>
                        <small>2019</small>
                        <p>
                            Developed TaskMaster, a responsive and user-friendly To-Do application. Leveraged CSS (45.8%) for styling and layout, JavaScript (40.1%) for task management and interactivity, and HTML (14.1%) for structuring content. The app allows users to efficiently add, edit, and delete tasks, enhancing productivity and organization.
                        </p>
                        <span className='left-arrow' aria-hidden="true"></span>
                    </div>
                </div>
                <div className="container right" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, 'infosys-title')}>
                    <img src="./work.png" alt="Work Icon" />
                    <div className="content" role="article" aria-labelledby="infosys-title" id="infosys-title" tabIndex={-1}>
                        <h2>Infosys Ltd.</h2>
                        <small>2018-2019</small>
                        <p>As a Software Developer Intern at Infosys, I utilized HTML and CSS along with JavaScript and AJAX to design and build a web application for Exam Monitor. This project involved creating intuitive and accessible web interfaces, enhancing the overall usability and functionality of the application.</p>
                        <span className='right-arrow' aria-hidden="true"></span>
                    </div>
                </div>
                <div className="container left" tabIndex={0} onKeyDown={(e) => handleKeyDown(e, 'sastra-title')}>
                    <img src="./education.png" alt="University Icon" />
                    <div className="content" role="article" aria-labelledby="sastra-title" id="sastra-title" tabIndex={-1}>
                        <h2>Sastra University</h2>
                        <small>2015-2019: Bachelor of Science in Information Technology</small>
                        <p>Relevant Coursework in Software development and design principles, web development, computer networking, programming languages</p>
                        <span className='left-arrow' aria-hidden="true"></span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Timeline;
