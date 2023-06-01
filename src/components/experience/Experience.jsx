import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My SWE Experience</h2>

    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Javascript</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Bulma</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
        </div>
      </div>
      {/* END OF FRONTEND */}
      <div className="experience__backend">
      <h3>Backendend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Intermerdiate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>MYSQL</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Express</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>GraphQL</h4>
              <small className='text-light'>Entry</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>DevOps</h4>
              <small className='text-light'>Entry</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Cloud Management</h4>
              <small className='text-light'>Entry</small>
            </div>
          </article>
        </div>
      </div>
    </div>

    </section>
  )
}

export default Experience