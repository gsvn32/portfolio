import React from 'react';
import './DesignInfo.css';

function DesignInfo() {
    return (
        <div className="design-info">
            <h1>UI/UX Design Phases</h1>
            <div className='phase-list'>
            <div className="phase">
                <h2>1. Research</h2>
                <p>Outcomes:</p>
                <ul>
                    <li>User Personas</li>
                    <li>Competitor Analysis</li>
                    <li>User Interviews</li>
                    <li>User Journey Maps</li>
                </ul>
            </div>
            
            <div className="phase">
                <h2>2. Design</h2>
                <p>Outcomes:</p>
                <ul>
                    <li>Wireframes</li>
                    <li>Prototypes</li>
                    <li>Visual Design</li>
                    <li>Design System</li>
                </ul>
            </div>
            
            <div className="phase">
                <h2>3. Testing</h2>
                <p>Outcomes:</p>
                <ul>
                    <li>User Testing Reports</li>
                    <li>Usability Test Results</li>
                    <li>Accessibility Audit</li>
                    <li>Feedback Analysis</li>
                </ul>
            </div>
            
            <div className="phase">
                <h2>4. Implementation</h2>
                <p>Outcomes:</p>
                <ul>
                    <li>High-fidelity Prototypes</li>
                    <li>Design Specifications</li>
                    <li>Style Guides</li>
                    <li>Component Libraries</li>
                </ul>
            </div>

            </div>
           
            
            <h2>Design Diagram</h2>
            <iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fboard%2F29Ky0BgAuRcKtn586WKp7N%2FWelcome-to-FigJam%3Fnode-id%3D0-1%26t%3D3UPmJjHct50XRpLr-1"
            className="design-iframe" 
            title="Design Diagram" 
            allowFullScreen></iframe>
           
            

        </div>
    );
}

export default DesignInfo;
