import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>10+ Years in IT<br/> ~1 Year Coding</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>500+ in Washington</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>6+ Completed</small>
            </article>
          </div>
          <p>Alex Brown is a Full-Stack web developer with technical skills in Javascript ES6+, CSS3, HTML5, SQL, NoSQL, MySQL, GitHub, MongoDB, Express, React, Node, Handlebars, jQuery, Bootstrap, Bulma, and Heroku. Alex has led and contributed to several successful projects, including a MERN PWA for developers, a collaborative short-story full-stack web app, and a SPA that lets users find local events and buy tickets. In addition to web development, Alex has experience as an engineer resolving hardware failures for Washington Departments of State and as an All-Source Intelligence Analyst for the US Army. Alex holds a Certificate in Full-Stack Web Development from the University of Washington, a Bachelor of Arts in General from The Evergreen State College, and additional certificates and awards.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About