import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'US - MobileOptimization - LO',
    github: 'htttps://github.com',
    demo: 'https://dribbble.com/shots/20170172-US-MobileOptimization-LO'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Crypto service - Mobile app',
    github: 'htttps://github.com',
    demo: 'https://dribbble.com/shots/20876173-Crypto-service-Mobile-app'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Creon Website',
    github: 'htttps://github.com',
    demo: 'https://dribbble.com/shots/20872150-Creon-Website'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Creon Website',
    github: 'htttps://github.com',
    demo: 'https://dribbble.com/shots/20876553-Warriors-of-Grace-Truth'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Web design: landing page UI',
    github: 'htttps://github.com',
    demo: 'https://dribbble.com/shots/20871943-Web-design-landing-page-UI'
  },
  {
    id: 6,
    image: IMG6,
    title: 'RoomRoas - Website Landing Page for Coffee Shop',
    github: 'htttps://github.com',
    demo: 'https://dribbble.com/shots/20873723-RoomRoas-Website-Landing-Page-for-Coffee-Shop'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Son Çalışmalarım</h5>
      <h2>Portföy</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article id={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Canlı Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio