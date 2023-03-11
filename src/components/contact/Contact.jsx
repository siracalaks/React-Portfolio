import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {RiWhatsappLine} from 'react-icons/ri'



const Contact = () => {
  return (
    <section id="contact">
      <h5>İrtibata Geçin</h5>
      <h2>İletişim</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>siracalaks@gmail.com</h5>
            <a href="mailto:siracalaks@gmail.com" target="_blank">Mesaj Gönderin</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine  className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Siraç Alakuş</h5>
            <a href="https://facebook.com" target="_blank">Mesaj Gönderin</a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine  className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+12345678910</h5>
            <a href="https://api.whatsapp.com/send?phone+123456789" target="_blank">Mesaj Gönderin</a>
          </article>
        </div>
        {/* END - CONTACT OPTIONS */}
        <form action="">
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Mesaj Gönderin</button>
        </form>
      </div>
    </section>
  )
}

export default Contact