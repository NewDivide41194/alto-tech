import Image from "next/image";
import HotelIMG from "../../public/images/hotel_image.png";

import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Carousel = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      initialSlide={1}
      centeredSlides={true}
      pagination={{ clickable: true }}
      autoplay
      grabCursor={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        638: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1300: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
    >
      <SwiperSlide style={{ height: 280 }}>
        <Image
          src={HotelIMG}
          alt="carousel_image"
          className="min-h-[240px] rounded-lg mx-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={HotelIMG}
          alt="carousel_image"
          className="min-h-[240px] rounded-lg  mx-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={HotelIMG}
          alt="carousel_image"
          className="min-h-[240px] rounded-lg  mx-auto"
        />
      </SwiperSlide>
    </Swiper>
  );
};
