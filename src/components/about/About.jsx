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
          <p>Hi there! I'm Alex Brown and I love everything software development. The world of code is my playground and I've spent most of my playing with Javascript ES6+, CSS3, HTML5, SQL, and a lot more. In my toolbox, you'll also find MongoDB, Express, React, Node, and other tech goodies like Handlebars, jQuery, Bootstrap, Bulma, and Heroku. I've also got a soft spot for GitHub - it's like my trusty Swiss Army knife for working together with my team and making our app deployment a breeze.</p>
          <p>
          I've had the opportunity to lead and make my mark on some pretty awesome projects. We've built a MERN PWA for fellow developers, whipped up a collaborative short-story full-stack web app, and crafted a neat single-page app for folks to discover local events and grab tickets. And guess what? We hosted all these projects in the cloud, harnessing the flexibility and reach it offers.
          </p><p>
          Before I jumped headfirst into the web development world, I spent some time solving hardware failures as an engineer for Worldwide Tech Services. I also sharpened my analytical skills while serving as an All-Source Intelligence Analyst for the US Army. Those experiences taught me a lot and prepared me for the challenges I now tackle in development.
          </p><p>
          As for the formal stuff, I earned my stripes with a Full-Stack Web Development Certificate from the University of Washington and a Bachelor of Arts from The Evergreen State College. But beyond the certificates and awards I've picked up along the way, I'm all about lifelong learning and growing every day.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About