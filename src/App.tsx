import { useState, useEffect, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { LogoGithub, LogoLinkedin, MailOutline } from 'react-ionicons';
import ProjectCard from './components/ProjectCard';
import projectCardInfo from './assets/projectCardInfo';

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
    <div className="pagewrapper">
      <header
        id="header"
        className="header col-span-2 flex p-5 justify-between"
      >
        <h1 className="text-2xl">SK</h1>
        <nav>
          <a href="#about" className="nav__aboutme px-5">
            About
          </a>
          <a href="#projects" className="nav__projects px-5">
            Projects
          </a>
          <a href="#contact" className="nav__contact px-5">
            Contact
          </a>
        </nav>
      </header>
      <main className="maincontent  px-10 xl:mx-40 xl:px-40 gap-10 flex flex-col justify-center items-center">
        <section className="maincontent__intro col-span-2 h-screen flex flex-col justify-center 2xl:mx-32 max-w-2xl ">
          <p className="text-base accenttext px-2">Hi, my name is</p>
          <h1 className="text-7xl">Sean Kempt.</h1>
          <p className="text-xl accenttext leading-7">
            I'm a self-taught Software Developer. Currently I'm looking for new
            opportunities to cultivate my skills and be a strong asset to a
            team.
          </p>
        </section>
        <section
          id="about"
          className="maincontent__aboutme h-screen col-span-2 grid grid-cols-1 items-center 2xl:mx-32 max-w-2xl"
        >
          <div className="maincontent__aboutme--text">
            <div className="flex items-center">
              <h2 className="text-4xl pr-5 accenttext">About Me</h2>
              <hr className="w-60" />
            </div>
            <p className="text-xl py-3 leading-7">
              Since I was a kid in school, I've been captivated by the
              ever-evolving world of technology. Over time, I've upskilled
              myself to become an engineer, collaborating with large enterprise
              businesses to deploy cutting-edge cloud services.
            </p>
            <p className="text-xl py-3 leading-7">
              Along this journey, I discovered my own curiosity for software
              development, which quickly blossomed into a fervent passion.
            </p>
            <p className="text-xl py-3 leading-7">
              When I'm not at the computer. I'm usually playing with my two dogs
              Sophia and Bubbas, training Brazilian jiujitsu, or going to
              explore a new place around town.
            </p>
            <p className="text-xl leading-7">
              Here are a few technologies i'm familiar with:
            </p>
          </div>
        </section>
        <section className="maincontent__projects col-span-2 h-screen 2xl:mx-32">
          <div className="flex items-center">
            <h2 className="text-4xl pr-5 accenttext">Some Things I've Built</h2>
            <hr className="w-60" />
          </div>
          <div
            id="projects"
            className="maincontent__projects__container grid grid-cols-1 items-center gap-5 max-w-2xl"
          >
            {projectCardInfo.map(
              (card): ReactNode => (
                <ProjectCard
                  key={uuidv4()}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  isMobile={isMobile}
                />
              )
            )}
          </div>
        </section>
        <section
          id="contact"
          className="maincontent__contact col-span-2 flex flex-col justify-center h-screen 2xl:mx-32"
        >
          <div className="flex items-center">
            <h1 className="text-4xl pr-5">Get In Touch</h1>
            <hr className="w-60" />
          </div>
          <p className="text-xl max-w-2xl ">
            Feel free to send me an email with any serious opportunities, or to
            ask a question. I'll try and get back to you as soon as possible!
          </p>
        </section>
        <ul className="socials col-span-2 content-center justify-center flex row-start-5 row-end-6  items-center xl:left-5 xl:bottom-0 xl:fixed xl:right-auto xl:flex-col xl:w-10">
          <li className="px-5 pb-5">
            <a
              target="_blank"
              href="https://github.com/SeanKempt"
              rel="noreferrer"
            >
              <LogoGithub
                color="#24990f"
                title="github"
                width="3rem"
                height="100%"
              />
            </a>
          </li>
          <li className="px-5 pb-5">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sean-kempt-012739126/"
              rel="noreferrer"
            >
              <LogoLinkedin
                color="#24990f"
                title="linkedin"
                width="3rem"
                height="100%"
              />
            </a>
          </li>
          <li className="px-5 pb-5">
            <a target="_blank" href="kempt101@gmail.comf">
              <MailOutline
                color="#24990f"
                title="mail"
                width="3rem"
                height="100%"
              />
            </a>
          </li>
        </ul>
      </main>
      <footer className="footer col-span-2 text-center">
        <p>Created by Sean Kempt</p>
      </footer>
    </div>
  );
}

export default App;
