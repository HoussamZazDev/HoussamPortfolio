import '../styles/portfolio-styles.css'
import React, { useContext } from 'react';
import { ThemeContext, LanguageContext } from './Portfolio';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const translations = {
  en: {
    greeting: "Hi, I'm",
    role: "Full Stack Developer",
    about: "About Me",
    aboutText: "I am a passionate developer with experience in building modern web applications. I love solving complex problems and creating intuitive user experiences.",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact Me",
    viewProject: "View Project"
  },
  fr: {
    greeting: "Bonjour, je suis",
    role: "Développeur Full Stack",
    about: "À Propos",
    aboutText: "Je suis un développeur passionné avec de l'expérience dans la création d'applications web modernes. J'aime résoudre des problèmes complexes et créer des expériences utilisateur intuitives.",
    skills: "Compétences",
    projects: "Projets",
    contact: "Contact",
    viewProject: "Voir le Projet"
  },
  es: {
    greeting: "Hola, soy",
    role: "Desarrollador Full Stack",
    about: "Sobre Mí",
    aboutText: "Soy un apasionado desarrollador de cucarachas con experiencia en la creación de aplicaciones web modernas. Me encanta resolver problemas complejos y crear experiencias de usuario intuitivas.",
    skills: "Habilidades",
    projects: "Proyectos",
    contact: "Contacto",
    viewProject: "Ver Proyecto"
  }
};

const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const skills = [
    "React", "JavaScript", "HTML/CSS", "Bootstrap",
    "Python", "Php", "MongoDB", "SQL", "Git", "Scrum/Jira",
  ];

  const projects = [
    {
      title: "Calculator",
      description: "A modern scientific calculator made with ReactJs along with HTML/CSS",
      image: "https://i.imgur.com/8MpZvX7.png",
      link: "/calculator"
    },
    {
      title: "TaskoPhobia",
      description: "A TodoApp to best organise your tasks in order to finish them in time",
      image: "https://i.imgur.com/siJQpZe.png",
      link: "/todoapp"
    },
    {
      title: "CoutriesApi",
      description: "An Api based app that give you information about the searched country",
      image: "https://i.imgur.com/6WGy1ZB.png",
      link: "/countriesapi"
    },
    {
      title: "Profile Application",
      description: "A profile application that manipulates different inputs with useState hook",
      image: "https://i.imgur.com/dpJ68dk.png",
      link: "/profileapplication"
    },
  ];

  return (
    <div className="portfolio__container">
      {/* Hero Section */}
      <section className="portfolio__hero-section">
        <div className="portfolio__hero-content">
          <h1 className="portfolio__hero-role" style={{fontSize : "3rem"}}>
            {t.greeting} <span className="portfolio__hero-name"> Zaz Houssam</span>
          </h1>
          <h2 className="portfolio__hero-role">{t.role}</h2>
          <div className="portfolio__social-links">
            <a href="#" className="portfolio__social-icon"><Github size={24} /></a>
            <a href="#" className="portfolio__social-icon"><Linkedin size={24} /></a>
            <a href="#" className="portfolio__social-icon"><Mail size={24} /></a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="portfolio__section">
        <h2 className="portfolio__section-heading">{t.about}</h2>
        <p className="portfolio__section-text">{t.aboutText}</p>
      </section>

      {/* Skills Section */}
      <section className="portfolio__section">
        <h2 className="portfolio__section-heading">{t.skills}</h2>
        <div className="portfolio__skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="portfolio__skill-item">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="portfolio__section">
        <h2 className="portfolio__section-heading">{t.projects}</h2>
        <div className="portfolio__projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio__project-card">
              <img 
                src={project.image} 
                alt={project.title} 
                className="portfolio__project-image"
              />
              <div className="portfolio__project-info">
                <h3 className="portfolio__project-title">{project.title}</h3>
                <p className="portfolio__project-description">{project.description}</p>
                <Link to={project.link} className="portfolio__project-link">{t.viewProject}</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="portfolio__contact-section portfolio__section">
        <h2 className="portfolio__section-heading">{t.contact}</h2>
        <div className="portfolio__contact-info">
          <a href="houssamzaz.dev@gmail.com" className="portfolio__contact-link">
            <Mail size={20} />
            houssamzaz.dev@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;