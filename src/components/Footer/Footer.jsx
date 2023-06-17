import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
        <Link to="/" className='footer__logo'>Ankita Kumari</Link>
        <ul className='permalinks'>
            <li><Link to ="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <div className="footer__socials">
            <a href="https://www.linkedin.com/in/ankita-kumari-125aa41b3/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/Ankitagupta1125" target="_blank"><FaGithub/></a>
            <a href="https://www.facebook.com/profile.php?id=100027109620281&mibextid=ZbWKwL" target="_blank"><FaFacebookF/></a>
            <a href="" target="_blank"><FaInstagramSquare/></a>
           

        </div>
        <div className="footer__copyright">
            <small>&copy; Ankita Kumari</small>
        </div>
        
    </footer>
  )
}

export default Footer