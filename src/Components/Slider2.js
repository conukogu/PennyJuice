import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  EffectCards,
  EffectCoverflow,
} from "swiper";
import "swiper/css/bundle";
import "swiper/css/effect-cards";
import FlavorName from "./FlavorNames";

import ImageData from "./ImageData";
import CheckoutButton from "./CheckoutButton";

SwiperCore.use([Navigation, Pagination, Controller, EffectCoverflow]);

function Slider2() {
  const flavor = [];

  for (let i = 0; i < 15; i += 1) {
    flavor.push(
      <SwiperSlide className="HB2" key={`slide-${i}`} tag="li">
        <h1 className="flaveName2">{FlavorName[i]} </h1>
        <img
          src={ImageData[i]}
          alt={`Thumbnail ${i}`}
          className="flavorPics2"
        />
        <CheckoutButton className="homeCartbutton2" />
      </SwiperSlide>
    );
  }

  return (
    <React.Fragment>
      <Swiper
        id="main2"
        tag="section"
        effect={"coverflow"}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        slidesPerView={"3"}
        modules={[EffectCoverflow, Pagination]}
        wrapperTag="ul"
        navigation
        //   pagination
        loop={true}
        watchSlidesProgress={true}
        onInit={(swiper) => console.log(`Swiper initialized`, swiper)}
        onSlideChange={(swiper) =>
          console.log(`Slide index changed to:`, swiper.activeIndex)
        }
        onReachEnd={() => console.log("Swiper end reached")}
        onReachBeginning={() => console.log("Swiper start reached")}
      >
        {flavor}
      </Swiper>
    </React.Fragment>
  );
}

export default Slider2;
