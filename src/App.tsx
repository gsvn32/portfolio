import React, { useState, useEffect }  from 'react';
import './App.css';
import Footer from './Footer';
import Profile from './Profile';
import Timeline from './Timeline';
import Designinfo from './DesignInfo';
import Experience from './Experience';
import Projects from './Projects';
function App() {
  const [currentComponent, setCurrentComponent] = useState('App');
  const renderComponent= () => {
    switch (currentComponent) {
      case 'App':
        return (
            <><Profile /><Timeline /></>
        
        );
      case 'Designinfo':
        return (
            <Designinfo />
        );
      case 'Experience':
        return (   
            <Experience />
        );
      case 'Projects':
        return (   
            <Projects />
        );
      default:
        return (
         
          <><Profile /><Timeline /></>
          
        );
    }

  };
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
   
            // <button onClick={() => setCurrentComponent('App')}>App</button>
            // <button onClick={() => setCurrentComponent('NewComponent1')}>New Component 1</button>
            // <button onClick={() => setCurrentComponent('NewComponent2')}>New Component 2</button>
            <div className="App">
               <header className={`navbar ${isScrolled ? 'fixed' : ''}`}>
            
            <nav aria-label="Main Navigation">
      <ul className="nav-list">
          <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#experience" className="nav-link" onClick={() => setCurrentComponent('Experience')}>Experience</a></li>
          <li className="nav-item"><a href="#project" className="nav-link" onClick={() => setCurrentComponent('Projects')}>Projects</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link" onClick={() => setCurrentComponent('Designinfo')}>Design Info</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
          <li className="nav-item"><a href="#address" className="nav-link">Address</a></li>
      </ul>
    </nav>
        
    </header>
            {renderComponent()}
            <Footer />
            </div>

);
  
}
export default App;


