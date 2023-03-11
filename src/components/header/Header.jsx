import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Merhaba Adım</h5>
        <h1>Muhammed Siraç Alakuş</h1>
        <h5 className='text-light'>Front End Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#concact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header