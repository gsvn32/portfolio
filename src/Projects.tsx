import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <div className="projects" role="region" aria-labelledby="projects-heading">
            <h2 id="projects-heading">Projects</h2>

            <section className="project" tabIndex={0} aria-labelledby="travel-django-title">
                <h3 id="travel-django-title">TravelDjango (Python/Django)</h3>
                <p><small>2024: Python, Django, JavaScript, MongoDB/MySQL, API, Git, Weather API</small></p>
                <p>A travel planning application that streamlines itinerary creation for tourists. Users can search destinations, receive real-time weather information, and build customized routes with various transportation options.</p>
            </section>

            <section className="project" tabIndex={0} aria-labelledby="gamemaster-title">
                <h3 id="gamemaster-title">GameMaster: A gamified task manager built in Next.js.</h3>
                <p><small>2023: Node.js, React, TypeScript, MongoDB, GitHub Actions, HTML, CSS</small></p>
                <p>Developed a full stack application enhancing user productivity through gamification. Designed and implemented user-friendly interfaces and interactive features. Optimized backend and frontend performance to ensure seamless user experiences.</p>
            </section>

            <section className="project" tabIndex={0} aria-labelledby="captionit-title">
                <h3 id="captionit-title">CaptionIt - Cloud based AI Image Captioning web Application</h3>
                <p><small>PyTorch, Django, Azure</small></p>
                <p>Generate descriptive and meaningful descriptions for images. Developed using pre-trained ML model and Python Django for web development on Azure.</p>
            </section>

            <section className="project" tabIndex={0} aria-labelledby="taskmaster-title">
                <h3 id="taskmaster-title">TaskMaster To-Do App</h3>
                <p><small>2019: HTML, CSS, JavaScript</small></p>
                <p>Developed TaskMaster, a responsive and user-friendly To-Do application. Leveraged CSS (45.8%) for styling and layout, JavaScript (40.1%) for task management and interactivity, and HTML (14.1%) for structuring content. The app allows users to efficiently add, edit, and delete tasks, enhancing productivity and organization.</p>
            </section>
        </div>
    );
}

export default Projects;
