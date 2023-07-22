import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProjectCard from './components/ProjectCard';
import githublogo from './images/logo-github.svg';
import linkedinlogo from './images/logo-linkedin.svg';
import emailicon from './images/mail-outline.svg';
import projectCardInfo from './assets/projectCardInfo';
import introInfo from './assets/introInfo';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  return (
    <div className="pagewrapper container mx-auto">
      <header>
        <nav>
          <a href="#about" className="nav__aboutme">
            About
          </a>
          <a href="#projects" className="nav__projects">
            Projects
          </a>
          <a href="#contact" className="nav__contact">
            Contact
          </a>
        </nav>
      </header>
      <main>
        <section className="main__intro">
          <p>Hi, my name is</p>
          <h1>Sean Kempt.</h1>
          <p>
            I'm a self-taught Software Developer. Currently I'm looking for new
            opportunities to cultivate my skills and be a strong asset to a
            team.
          </p>
        </section>
        <section className="main__aboutme">
          <h2>About Me</h2>
          <p>{introInfo.aboutme}</p>
          <p>{introInfo.hobbies}</p>
          <p>Here are a few technologies i'm familiar with:</p>
        </section>
        <section className="projects">
          <h2>Some Things I've Built</h2>
        </section>
        <section className="main__contact">
          <h2>What's next?</h2>
          <h1>Get In Touch</h1>
          <p>
            Feel free to send me an email with any serious opportunities, or to
            ask a question. I'll try and get back to you as soon as possible!
          </p>
        </section>
      </main>
      <footer>
        <p>Created by Sean Kempt</p>
      </footer>
    </div>
  );
}

export default App;
