import React from 'react'
import CV from '../../assets/cv.pdf'


const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#concact" className='btn btn-primary'>İletişim</a>
    </div>
  )
}

export default CTA