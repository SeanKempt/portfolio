import ProjectCard from './components/ProjectCard';
import githublogo from './images/logo-github.svg';
import linkedinlogo from './images/logo-linkedin.svg';
import emailicon from './images/mail-outline.svg';
import projectCardInfo from './assets/projectCardInfo';

function App() {
  return (
    <div className="pagewrapper">
      <div className="introduction">
        <h1 className="introduction__title">Hi I'm Sean Kempt, Full Stack Developer</h1>
      </div>
      <div className="aboutme">
        <p className="aboutme__intro">Here is an about me section that gives my background and intrests.</p>
      </div>
      <div className="projects">
        <h2 className="projects__title">Here are all my projects!</h2>
        <div className="projects__grid-container">
          {projectCardInfo.map((card) => (
            <ProjectCard title={card.title} description={card.description} image={card.image} />
          ))}
        </div>
      </div>
      <div className="socials">
        <img className="socials__logo" src={githublogo} alt="Github logo" />
        <img className="socials__logo" src={linkedinlogo} alt="LinkedIn logo" />
        <img className="socials__logo" src={emailicon} alt="Email logo" />
      </div>
      <footer className="footer">
        <p>Created by Sean Kempt</p>
      </footer>
    </div>
  );
}

export default App;
