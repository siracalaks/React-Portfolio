import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Tanıtım</h5>
      <h2>Hakkımda</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="ABOUT ME" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Deneyim</h5>
              <small>2 Yıldan Fazla Çalışıyorum</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Müşteriler</h5>
              <small>50+ Dünya Çapında</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projeler</h5>
              <small>13+ Proje</small>
            </article>
          </div>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, consequatur iure autem officia doloribus magnam quod voluptates doloremque similique dicta velit excepturi voluptas animi quaerat dignissimos molestiae libero dolore harum.</p>

          <a href="#contact" className='btn btn-primary'>İletişim</a>
        </div>
      </div>
    </section>
  )
}

export default About