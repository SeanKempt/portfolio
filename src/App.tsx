import {useState, useEffect} from 'react';
import ProjectCard from './components/ProjectCard';
import githublogo from './images/logo-github.svg';
import linkedinlogo from './images/logo-linkedin.svg';
import emailicon from './images/mail-outline.svg';
import projectCardInfo from './assets/projectCardInfo';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true)
     } else {
      setIsMobile(false)
    }
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  return (
    <div className="pagewrapper">
      <div className="header">
        <div className="header__intronav">
          <h1 className="header__intronav--name">Sean Kempt</h1>
          <h2 className="header__intronav--role">Full Stack Developer</h2>
          <ul className="header__nav">
            <li><a href="#aboutme">About me</a></li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contactme">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="aboutme" className="aboutme">
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
      <div id="projects" className="projects">
        <h2 className="projects__title">Projects</h2>
        <div className="projects__grid-container">
          {projectCardInfo.map((card) => (
            <ProjectCard
              title={card.title}
              description={card.description}
              image={card.image}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
      <form id="contactme" className="contactme">
        <h2 className="contactme__title">Contact Me</h2>
          <div>
            <label htmlFor="email" className='contactme__email'>
              Email
              <input id="email" name="email" type="text" />
            </label>
          </div>
          <div>
            <label htmlFor="message" className='contactme__message'>
              Message
              <textarea name="message" id="message" rows={5} cols={40} />
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
