import ProjectCard from './components/ProjectCard';
import githublogo from './images/logo-github.svg';
import linkedinlogo from './images/logo-linkedin.svg';
import emailicon from './images/mail-outline.svg';
import projectCardInfo from './assets/projectCardInfo';

function App() {
  return (
    <div className="pagewrapper">
      <div className="header">
        <div className="header__intronav">
          <h1>Sean Kempt</h1>
          <h2>Full Stack Developer</h2>
          <ul>
            <li>About me</li>
            <li>Projects</li>
            <li>Contact me</li>
          </ul>
        </div>
      </div>
      <div className="aboutme">
        <p className="aboutme__intro">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus natus eius expedita deserunt, qui eveniet, reprehenderit autem libero quam sed ipsam doloribus, ad odio aliquid perspiciatis laudantium ea minima modi?
        Dolor quo soluta ullam blanditiis velit, ad distinctio recusandae natus consequuntur, nisi adipisci possimus consectetur magni reprehenderit labore pariatur laudantium, quam earum perferendis error facilis ipsa? Ex fugit totam eaque?
        Voluptatem nesciunt quibusdam amet, ipsam distinctio officia non aut blanditiis, ratione ex temporibus fuga dicta placeat explicabo! Optio voluptatem, modi non consequatur facilis, mollitia ut nisi voluptate ipsam, assumenda maxime.
        Modi facilis voluptatem recusandae vitae? Culpa corporis ex tempore libero quam. Provident quidem iusto architecto praesentium esse minima nemo voluptates eveniet? At quisquam necessitatibus laborum, libero eaque accusamus mollitia ipsa!
        Corporis recusandae impedit voluptates ab sapiente rem cupiditate reiciendis modi ex vel, id magni ea neque deserunt, voluptatibus molestias, laudantium alias! Corrupti optio neque sapiente iste, dolorem perspiciatis quia iure.</p>
      </div>
      <div className="projects">
        <h2 className="projects__title">Projects!</h2>
        <div className="projects__grid-container">
          {projectCardInfo.map((card) => (
            <ProjectCard title={card.title} description={card.description} image={card.image} />
          ))}
        </div>
      </div>
        <form className="contactme">
          <h2 className='contactme__title'>Contact Me</h2>
          <label htmlFor="email">Email</label>
          <input type="text" />
          <label htmlFor="message">Message</label>
          <textarea rows={6} cols={50}/>
        </form>
      <div className="socials">
          <a className="socials__logo" href=""><img  src={githublogo} alt="Github logo" /></a>
          <a className="socials__logo" href=""><img  src={linkedinlogo} alt="LinkedIn logo" /></a>
          <a className="socials__logo"href=""><img  src={emailicon} alt="Email logo" /></a>
        </div>
      <footer className="footer">
        <p>Created by Sean Kempt</p>
      </footer>
    </div>
  );
}

export default App;
