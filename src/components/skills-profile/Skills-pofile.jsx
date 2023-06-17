import React from 'react'
import './Skills-profile.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Skills = () => {
    return (
        <section id='skills'>
          <h5> What Skills I Have</h5>
          <h2> My Skills</h2>
          <div className="container skills__container">
            {/* frontend */}
            <div className='skills__frontend'>
              <h3>Business Analyst</h3>
              <div className="skills__content">
                <article className='skills__details'>
                  <BsPatchCheckFill className='skills__details-icon'/>
                  <div>
                  <h4>Excel</h4>
                  </div>
                </article>
                <article className='skills__details'>
                  <BsPatchCheckFill className='skills__details-icon'/>
                  <div>
                  <h4>SQL</h4>
                  </div>
                </article>
                <article className='skills__details'>
                  <BsPatchCheckFill className='skills__details-icon'/>
                  <div>
                  <h4>Statistics</h4>
                  </div>
                </article>
                <article className='skills__details'>
                  <BsPatchCheckFill className='skills__details-icon'/>
                  <div>
                  <h4>Python</h4>
                  </div>
                  
                </article>
                <article className='skills__details'>
                  <BsPatchCheckFill className='skills__details-icon'/>
                  <div>
                  <h4>Tableau</h4>
                  </div>
                  
                </article>
                <article className='skills__details'>
                  <BsPatchCheckFill className='skills__details-icon'/>
                  <div>
                  <h4>Power BI</h4>
                  </div>
                  
                </article>
                <article className='skills__details'>
                  <BsPatchCheckFill className='skills__details-icon'/>
                  <div>
                  <h4>Agile Methodology</h4>
                  </div>
                </article>
              </div>
            </div>
            {/* backend */}
            <div className='skills__backend'>
            <h3>Financial Analysts</h3>
              <div className="skills__content">
                <article className='skills__details'>
                  <BsPatchCheckFill className='skills__details-icon'/>
                  <div>
                  <h4>Accounting</h4>
                  </div>
                  
                </article>
                <article className='skills__details'>
                  <BsPatchCheckFill className='skills__details-icon'/>
                  <div>
                  <h4>Financial Modeling</h4>
                  </div>
                  
                </article>
                <article className='skills__details'>
                  <BsPatchCheckFill className='skills__details-icon'/>
                  <div>
                  <h4>Tally</h4>
                  </div>
                  
                </article>
                <article className='skills__details'>
                  <BsPatchCheckFill className='skills__details-icon'/>
                  <div>
                  <h4>Excel</h4>
                  </div>
                  
                </article>
                <article className='skills__details'>
                  <BsPatchCheckFill className='skills__details-icon'/>
                  <div>
                  <h4>Financial Analysis</h4>
                  </div>
                  
                </article>

    

    
              </div>
              </div>

          </div>
        </section>
    
      )
}

export default Skills