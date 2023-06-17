import React from 'react'
import ME from '../../assets/me-about.jpeg'
import './About_profile.css'
import {FaAward} from 'react-icons/fa'
import {GiSpellBook} from 'react-icons/gi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const About_profile = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
        <div className="aboutme">
            <div className="about__me-image">
                <img src={ME} alt="About mypic"/>
            </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
                <article className='about__card'>
                    <FaAward className='about__icon'/>
                    <h5>Experience</h5>
                    <h3>Fresher</h3>
                </article>

                <article className='about__card'>
                    <GiSpellBook className='about__icon'/>
                    <h5>Internship</h5>
                    <h3>2+<small> projects</small></h3>
                </article>

                <article className='about__card'>
                    <VscFolderLibrary className='about__icon'/>
                    <h5>Projects</h5>
                   <h3>4+ <small> Completed</small></h3>
                </article>
            </div>
            <p>
            It was my passout year in 2022. I am Ankita Kumari.MY highest Education Qualification is Bachelor of Commerce (B.com) From Sunbeam College For Womens, Varanasi,(U.p). Recently i am completed the course from Skill Academy by testbook.

                
                
            </p>
            <Link to="/contact" className='btn btn-primary'>Let's Talk</Link>
        </div>
    </div>
</section>
  )
}

export default About_profile