import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>IT Services</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Hardware troubleshooting and repair - desktops, laptops, servers</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>IT infrastructure consulting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Small business server & network configuration</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Software training</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Remote file-level and system-image backup/restore.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>OS installation and configuration</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Custom PC builds</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website consulting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web presence analysis</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Small business website development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database management & configuration</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Associate cloud management</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Associate DevOps</p>
            </li>
          </ul>
        </article>
        {/* End of Web Dev */}
        <article className="service">
          <div className="service__head">
            <h3>Freelance Work</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Business consulting and process analysis</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Drone photography</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Piano performance - classical, improv, musicals</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Business intelligence analysis</p>
            </li>
          </ul>
        </article>
        {/* End of Web Dev */}
      </div>
    </section>
  )
}

export default Services