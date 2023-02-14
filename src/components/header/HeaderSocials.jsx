/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/abrowncownow" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/abrowncownow" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://dribbble.com/abrowncownow" target="_blank" rel="noreferrer"><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials