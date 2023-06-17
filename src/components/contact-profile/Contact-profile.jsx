import React from 'react'
import './Contact-profile.css'
import{MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
const Contact = () => {  
  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2> Contact Me</h2>
        <div className="container contact__container">
            {/* contact options */}
            <div className="contact__options">
                <article className='contact__option'>
                    <MdOutlineEmail className='contact__option-icon'/>
                    <h4>Email</h4>
                    <h5>gankita639@gmail.com</h5>
                    <a href="mailto:gankita639@gmail.com" target="_blank">Send a message</a>
                </article>
                <article className='contact__option'>
                    <RiMessengerLine className='contact__option-icon'/>
                    <h4>Messanger</h4>
                    <h5>Ankita Kumari</h5>
                    <a href="https://www.facebook.com/profile.php?id=100027109620281&mibextid=ZbWKwL" target="_blank">Send a message</a>
                </article>
                <article className='contact__option'>
                    <BsWhatsapp className='contact__option-icon'/>
                    <h4>WhatsApp</h4>
                    <h5>+91-8002462715</h5>
                    <a href="https://api.whatsapp.com/send?phone=918002462715" target="_blank">Send a message</a>
                </article>
            </div>

            {/* form action */}
            <form>
                <input type="text" name='name' placeholder='Enter Your Full Name' required />
                <input type="email" name="email" placeholder='Enter EmailID'required />
                <textarea name="message" id="mssg" rows="7" placeholder='Enter Your Message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>


            </form>

        </div>
    </section>
  )
}

export default Contact