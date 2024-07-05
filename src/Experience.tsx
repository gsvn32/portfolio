import React from 'react';
import './Experience.css';

function Experience() {
    return (
        <div className="experience" role="region" aria-labelledby="experience-heading">
            <h2 id="experience-heading">Experience</h2>
            
            <section className="job" tabIndex={0} aria-labelledby="umkc-title">
                <h3 id="umkc-title">UMKC ACED</h3>
                <p><small>Feb 2024 - May 2024</small></p>
                <p><small>Student Research Assistant</small></p>
                <ul>
                    <li>Maintained and troubleshooted classroom computers, ensuring smooth operations under challenging conditions.</li>
                    <li>Provided warm and caring instruction to students with various mental and physical disabilities.</li>
                    <li>Praised for problem-solving skills, hard work, and a positive attitude in a dynamic educational environment.</li>
                </ul>
            </section>
                
            <section className="job" tabIndex={0} aria-labelledby="honeywell-title">
                <h3 id="honeywell-title">Honeywell</h3>
                <p><small>June 2019 - Dec 2022</small></p>
                <p><small>Sr. Software Engineer</small></p>
                <ul>
                    <li>Led development and management of MVC applications using AWS and Spring Boot.</li>
                    <li>Designed complex queries and stored SQL procedures in PL/SQL and MySQL.</li>
                    <li>Implemented CI/CD pipelines with GitHub and Jenkins, enhancing code deployment efficiency.</li>
                    <li>Developed Single Page Applications (SPAs) with React, managing state and AJAX requests.</li>
                    <li>Worked with AWS services for log monitoring and management.</li>
                    <li>Reduced software defects by 50% by developing Python-based QA tools.</li>
                    <li>Authored automated testing scripts using Karate, ensuring high software quality.</li>
                    <li>Conducted code reviews, improving overall code quality by 20%.</li>
                </ul>
            </section>

            <section className="job" tabIndex={0} aria-labelledby="infosys-title">
                <h3 id="infosys-title">Infosys Ltd</h3>
                <p><small>Dec 2018 – May 2019</small></p>
                <p><small>Software Developer Intern</small></p>
                <ul>
                    <li>Led a team to design and build a web application for Exam Monitor, reducing exam irregularities by 30%.</li>
                    <li>Utilized Hibernate for ORM and MySQL for database management.</li>
                    <li>Utilized JavaScript, AJAX, HTML, CSS, and IBM DB2 in application development.</li>
                    <li>Utilized Hibernate for ORM and MySQL for database management.</li>
                    <li>Employed Docker for efficient application shipping.</li>
                    <li>Executed unit, integration, and system testing to identify critical issues early on.</li>
                    <li>Adhered to Agile methodology, focusing on rapid software releases.</li>
                </ul>
            </section>
        </div>
    );
}

export default Experience;
