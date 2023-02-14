/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/abrowncownow" target='_blank' rel='noreferrer'><FaFacebookF /></a>
        <a href="https://instagram.com/abrowncownow" target='_blank' rel='noreferrer'><FiInstagram /></a>
        <a href="https://twitter.com/abrowncownow" target='_blank' rel='noreferrer'><IoLogoTwitter /></a>
      </div>


      <div className="footer__copyright">
        <small>&copy; Alex Brown. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer