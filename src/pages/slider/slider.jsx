import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';


// import images
import slider144 from "../..//images/Slider_144.webp"
import slider145 from "../..//images/Slider_145.webp"
import slider146 from "../..//images/Slider_146.webp"
import slider147 from "../..//images/Slider_147.webp"

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slider144}  /></SwiperSlide>
        <SwiperSlide><img src={slider145}  /></SwiperSlide>
        <SwiperSlide><img src={slider146}  /></SwiperSlide>
        <SwiperSlide><img src={slider147}  /></SwiperSlide>
      </Swiper>
    </>
  );
}


