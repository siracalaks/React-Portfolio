import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/avatar1.png'
import AVT2 from '../../assets/avatar2.png'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVT1,
    name: 'Merve Çamlık',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero qui voluptates, iste quas quaerat assumenda. Corrupti impedit accusantium officia nulla dolorum delectus blanditiis.'
  },
  {
    avatar: AVT2,
    name: 'Melih Can',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero qui voluptates, iste quas quaerat assumenda. Corrupti impedit accusantium officia nulla dolorum delectus blanditiis.'
  },
  {
    avatar: AVT3,
    name: 'Cansu Demir',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero qui voluptates, iste quas quaerat assumenda. Corrupti impedit accusantium officia nulla dolorum delectus blanditiis.'
  },
  {
    avatar: AVT4,
    name: 'Ahmet Beycan',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero qui voluptates, iste quas quaerat assumenda. Corrupti impedit accusantium officia nulla dolorum delectus blanditiis.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Müşterilerimizin Değerlendirmeleri</h5>
      <h2>Referanslar</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>

              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials