import React, {useRef} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BiPhoneCall} from 'react-icons/bi'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_6i42itq', 'template_nq7z2yo', form.current, 'BD9oR5hJb9ECIOjOf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  }
  



  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>abrowncownow@gmail.com</h5>
            <a href="mailto:abrowncownow@gmail.com" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>abrowncownow</h5>
            <a href="https://m.me/abrowncownow" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
          <article className="contact__option">
            <BiPhoneCall className='contact__option-icon'/>
            <h4>Call</h4>
            <h5>360-393-7255</h5>
            <a href="tel:3603937255">Call Me</a>
          </article>
        </div>
        {/* end of contact options */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact