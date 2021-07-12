import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./style/swiper.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

//import local images
import One from '../img/1.png'
import Two from '../img/2.png'
import Three from '../img/3.png'
import Four from '../img/4.png'
import Five from '../img/5.png'
import Six from '../img/6.png'
import Seven from '../img/7.png'
import Eight from '../img/8.png'
import Nine from '../img/9.png'
import Ten from '../img/10.png'
import Eleven from '../img/11.png'
import Thirteen from '../img/13.png'
import Fourteen from '../img/14.png'
import Fifteen from '../img/15.png'
import Sixteen from '../img/16.png'
import Seventeen from '../img/17.png'
import Eighteen from '../img/18.png'
import Nineteen from '../img/19.png'
import Twenty from '../img/20.png'
import TwentyOne from '../img/21.png'
import TwentyTwo from '../img/22.png'

// install Swiper modules
SwiperCore.use([Pagination]);

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={Three} alt="img not available"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={One} alt="img not available"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Four} alt="img not available"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Five} alt="img not available"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Six} alt="img not available"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Seven} alt="img not available"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Eight} alt="img not available"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Nine} alt="img not available"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Ten} alt="img not available"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Eleven} alt="img not available"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Seventeen} alt="img not available"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Sixteen} alt="img not available"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Fifteen} alt="img not available"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Thirteen} alt="img not available"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Fourteen} alt="img not available"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Eighteen} alt="img not available"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={TwentyOne} alt="img not available"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={TwentyTwo} alt="img not available"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Twenty} alt="img not available"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Nineteen} alt="img not available"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Two} alt="img not available"></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
