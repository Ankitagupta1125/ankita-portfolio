import React from 'react'
import './Education_profile.css'
import {FaRegHandPointRight} from 'react-icons/fa'
import {FiCornerUpRight} from 'react-icons/fi'
import {AiOutlineLink} from 'react-icons/ai'
const Education_profile = () => {
    return (
        <section id='skills'>
          <h2> My Education</h2>
          <div className="container experience__container">
            {/* frontend */}
            <div className='experience__frontend'>
              <h1>Sunbeam College for Women</h1>
              <h3>Location-Varanasi,Uttar Pradesh(u.p)</h3>
              <h2>B.com</h2>
              <h3>(2019-2022)</h3>
            </div>
            {/* backend */}
            <div className='experience__backend'>
            <h1>Bansthali Vidyapith</h1>
            <h3>Location-Jaipur,Rajasthan</h3>
            <h2>XTH + 2</h2>
            <h3>(2017 - 2019)</h3>

              </div>
              {/* otherskills */}
              <div className='experience__otherskills'>
              <h1>G.D. Mother International School</h1>
              <h3>Location-Muzaffarpur,Bihar</h3>
              <h2>XTH</h2>
              <h3>(2016 - 2017)</h3>
            </div>
          </div>
        </section>
      )
    }
    


export default Education_profile