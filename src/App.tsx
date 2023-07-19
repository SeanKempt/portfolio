import { useEffect, useState } from 'react';
import ProjectCard from './components/ProjectCard';
import githublogo from './images/logo-github.svg';
import linkedinlogo from './images/logo-linkedin.svg';
import emailicon from './images/mail-outline.svg';
import projectCardInfo from './assets/projectCardInfo';

function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const sections = document.querySelectorAll<HTMLElement>('.section');

    let currentSection: string | null = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop - 50
        && window.scrollY < sectionTop + sectionHeight - 50
      ) {
        currentSection = section.getAttribute('id');
      }
    });
    console.log('Active Section:', currentSection);
    setActiveSection(currentSection);
  };
  return (
    <div className="pagewrapper">
      <div className="header">
        <div className="header__intronav">
          <h1 className="header__intronav--name">Sean Kempt</h1>
          <h2 className="header__intronav--role">Full Stack Developer</h2>
          <ul className="header__nav">
            <li
              className={activeSection === 'aboutme' ? 'navbar-highlight' : ''}
            >
              About Me
            </li>
            <li
              className={activeSection === 'projects' ? 'navbar-highlight' : ''}
            >
              Projects
            </li>
            <li
              className={
                activeSection === 'contactme' ? 'navbar-highlight' : ''
              }
            >
              Contact Me
            </li>
          </ul>
        </div>
      </div>
      <div id="aboutme" className="section aboutme">
        <h2 className="aboutme__title">About Me</h2>
        <p className="aboutme__intro">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          officiis ducimus odit magnam, vero molestiae maiores provident enim
          fuga sed, esse sunt porro laborum iste nesciunt, expedita facere est
          exercitationem? Exercitationem officia incidunt quod ipsa tempore
          sapiente adipisci dolorum, cupiditate, at praesentium alias veritatis,
          iste eligendi. Ad necessitatibus similique consequatur quae, itaque
          nulla et alias dolor, ratione adipisci vel saepe!
        </p>
      </div>
      <div id="projects" className="section projects">
        <h2 className="projects__title">Projects</h2>
        <div className="projects__grid-container">
          {projectCardInfo.map((card) => (
            <ProjectCard
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </div>
      <form id="contactme" className="section contactme">
        <h2 className="contactme__title">Contact Me</h2>
        <div>
          <label htmlFor="email">
            Email
            <input id="email" name="email" type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="message">
            Message
            <textarea name="message" id="message" rows={6} cols={50} />
          </label>
        </div>
      </form>
      <div className="socials">
        <a className="socials__logo" target="_blank" href="https://github.com/SeanKempt?tab=repositories" rel="noreferrer">
          <img src={githublogo} alt="Github logo" />
        </a>
        <a className="socials__logo" target="_blank" href="https://www.linkedin.com/in/sean-kempt-012739126/" rel="noreferrer">
          <img src={linkedinlogo} alt="LinkedIn logo" />
        </a>
        <a className="socials__logo" target="_blank" href="kempt101@gmail.com">
          <img src={emailicon} alt="Email logo" />
        </a>
      </div>
      <div className="footer">
        <p>Created by Sean Kempt</p>
      </div>
    </div>
  );
}

export default App;
