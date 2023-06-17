import React from 'react'
import './portfolio-profile.css'
import IMG1 from '../../assets/file.jpeg'
import IMG2 from '../../assets/images.jpeg'
import IMG3 from '../../assets/power-BI.png'
import IMG4 from '../../assets/download.jpeg'
const data=[
    {
        id:1,
        image:IMG1,
        title:'Financial Data Analysts of the Western Country',
        github:'https://github.com/Ankitagupta1125/excel-assignment',
        demo:'https://www.youtube.com/watch?v=Zdt2P-gwY1I'
    },
    {
        id:2,
        image:IMG2,
        title:'Weather Condition Analysis',
        github:'https://github.com/Ankitagupta1125/Statistics-Analysis',
        demo:'https://www.youtube.com/watch?v=TQGHPnyBKpo'
    },
    {
        id:3,
        image:IMG3,
        title:'Data Visualization of the Super Store',
        github:'https://github.com/Ankitagupta1125/Statistics-Analysis',
        demo:'https://www.youtube.com/watch?v=VCrz_3eYk7c'
    },
    {
        id:4,
        image:IMG4,
        title:'BAsic of Python(Assignment)',
        github:'https://github.com/Ankitagupta1125/Statistics-Analysis',
        demo:'https://www.youtube.com/watch?v=VCrz_3eYk7c'
    }
]
const portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    data.map(({id,image,title,github,demo})=>{
                        return(
                            <article key={id} className='portfolio__item'>
                            <div className="portfolio__item-image">
                                <img src={image} alt={title}/>
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                            <a href={github} className='btn' target="_blank">Github</a>
                            <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                            </div>
                            </article>
                        )
                    })
                }
    
     
    
    
            </div>
        </section>
      )
}

export default portfolio