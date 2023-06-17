import React from 'react'
import './Profile.css'
import ME from '../../assets/ankita.png'
import CTA from './CTA'
const Profile = () => {
  return (
    <header>
            <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Ankita Kumari</h1>
            <h5 className="text-light"> Business Analyst / Financial Analyst</h5>
            <CTA/>
            <div className="me">
                <img src={ME} alt='me'/>
            </div>
        </div>
    </header>
  )
}

export default Profile