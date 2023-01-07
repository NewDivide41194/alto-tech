// Import Swiper React components
import Image from "next/image";
import HotelIMG from "../../public/images/hotel_image.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Carousel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      // slidesPerView={1}
      centeredSlides={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      autoplay
      grabCursor= {true}

      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        // when window width is >= 480px
        638: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        1300: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      // style={{paddingRight:80}}
    >
      <SwiperSlide style={{height:280}}>
        <Image src={HotelIMG} alt="carousel_image" className="min-h-[240px] rounded-lg mx-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={HotelIMG} alt="carousel_image" className="min-h-[240px] rounded-lg  mx-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={HotelIMG} alt="carousel_image" className="min-h-[240px] rounded-lg  mx-auto" />
      </SwiperSlide>
    </Swiper>
  );
};