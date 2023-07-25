import { useState, useEffect, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProjectCard from './components/ProjectCard';
import githublogo from './images/logo-github.svg';
import linkedinlogo from './images/logo-linkedin.svg';
import emailicon from './images/mail-outline.svg';
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
      <main className="maincontent grid grid-cols-2 mx-40 px-40 gap-10">
        <section className="maincontent__intro col-span-2 h-screen flex flex-col justify-center mx-32 ">
          <p className="text-base accenttext">Hi, my name is</p>
          <h1 className="text-7xl">Sean Kempt.</h1>
          <p className="text-xl accenttext">
            I'm a self-taught Software Developer. Currently I'm looking for new
            opportunities to cultivate my skills and be a strong asset to a
            team.
          </p>
        </section>
        <section className="maincontent__aboutme h-screen col-span-2 grid grid-cols-2 items-center mx-32">
          <div className="maincontent__aboutme--text">
            <div className="flex items-center">
              <h2 className="text-4xl pr-5 accenttext">About Me</h2>
              <hr className="w-60" />
            </div>
            <p className="text-xl py-3">
              Since I was a kid in school, I've been captivated by the
              ever-evolving world of technology. Over time, I've upskilled
              myself to become an engineer, collaborating with large enterprise
              businesses to deploy cutting-edge cloud services.
            </p>
            <p className="text-xl py-3">
              Along this journey, I discovered my own curiosity for software
              development, which quickly blossomed into a fervent passion.
            </p>
            <p className="text-xl py-3">
              When I'm not at the computer. I'm usually playing with my two dogs
              Sophia and Bubbas, training Brazilian jiujitsu, or going to
              explore a new place around town.
            </p>
            <p className="text-xl">
              Here are a few technologies i'm familiar with:
            </p>
          </div>
          <img src={githublogo} alt="" />
        </section>
        <section className="maincontent__projects col-span-2 h-screen mx-32">
          <div className="flex items-center">
            <h2 className="text-4xl pr-5 accenttext">Some Things I've Built</h2>
            <hr className="w-60" />
          </div>
          <div className="maincontent__projects__container grid grid-cols-1 items-center gap-5">
            {projectCardInfo.map(
              (card): ReactNode => (
                <ProjectCard
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  isMobile={isMobile}
                />
              )
            )}
          </div>
        </section>
        <section className="maincontent__contact col-span-2 mx-32 flex flex-col justify-center h-screen">
          <div className="flex items-center">
            <h1 className="text-4xl pr-5">Get In Touch</h1>
            <hr className="w-60" />
          </div>
          <p className="text-xl ">
            Feel free to send me an email with any serious opportunities, or to
            ask a question. I'll try and get back to you as soon as possible!
          </p>
        </section>
      </main>
      <footer className="footer col-span-2 text-center">
        <p>Created by Sean Kempt</p>
      </footer>
    </div>
  );
}

export default App;
