import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  EffectFlip,
  EffectCoverflow,
} from "swiper";
import "swiper/css/bundle";
import "swiper/css/effect-flip";
import FlavorName from "./FlavorNames";

import ImageData from "./ImageData";
import CheckoutButton from "./CheckoutButton";

SwiperCore.use([Navigation, Pagination, Controller, EffectFlip]);

function Slider3() {
  const flavor = [];

  for (let i = 0; i < 15; i += 1) {
    flavor.push(
      <SwiperSlide className="HB3" key={`slide-${i}`} tag="li">
        <h1 className="flaveName3">{FlavorName[i]} </h1>
        <CheckoutButton />
        <img
          src={ImageData[i]}
          alt={`Thumbnail ${i}`}
          className="flavorPics3"
        />
      </SwiperSlide>
    );
  }

  return (
    <React.Fragment>
      <Swiper
        id="main3"
        tag="section"
        effect={"flip"}
        centeredSlides={true}
        slidesPerView={"3"}
        modules={[EffectFlip, Pagination]}
        wrapperTag="ul"
        navigation
        grabCursor={true}
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

export default Slider3;
