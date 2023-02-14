import React, { useRef, useState } from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import { register } from 'swiper/element/bundle';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";


register();
const data = [
  {
    avatar: AVTR1,
    name: 'Test Client 1',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt voluptas ipsam pariatur aliquam sapiente nemo! Id, perferendis nisi? Placeat officiis porro commodi quisquam eveniet voluptatum qui totam reiciendis a magnam!'
  },
  {
    avatar: AVTR2,
    name: 'Test Client 2',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt voluptas ipsam pariatur aliquam sapiente nemo! Id, perferendis nisi? Placeat officiis porro commodi quisquam eveniet voluptatum qui totam reiciendis a magnam!'
  },
  {
    avatar: AVTR3,
    name: 'Test Client 3',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt voluptas ipsam pariatur aliquam sapiente nemo! Id, perferendis nisi? Placeat officiis porro commodi quisquam eveniet voluptatum qui totam reiciendis a magnam!'
  },
  {
    avatar: AVTR4,
    name: 'Test Client 4',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt voluptas ipsam pariatur aliquam sapiente nemo! Id, perferendis nisi? Placeat officiis porro commodi quisquam eveniet voluptatum qui totam reiciendis a magnam!'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonioals'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="mySwiper container testimonials__container"
      pagination={{clickable: true}} 
      modules={[Pagination]} 
      slidesPerView={1}
      spaceBetween={40}
      >
        {data.map(({avatar, name, review}, index) => {
          return(
            <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5>{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
          )
        })}
        </Swiper>
    </section>
  )
}

export default Testimonials