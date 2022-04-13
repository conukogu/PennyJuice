import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  EffectCards,
} from "swiper";
import "swiper/css/bundle";
import "swiper/css/effect-cards";
import FlavorName from "./FlavorNames"

import ImageData from "./ImageData";
import CheckoutButton from "./CheckoutButton";

SwiperCore.use([Navigation, Pagination, Controller]);

function Slider1() {
  const flavor = [];

  for (let i = 0; i < 15; i += 1) {
    flavor.push(
      <SwiperSlide className="HB1" key={`slide-${i}`} tag="li">
        <h1 className="flaveName1">{FlavorName[i]} </h1>
        <img
          src={ImageData[i]}
          alt={`Thumbnail ${i}`}
          className="flavorPics1"
        />
        <CheckoutButton className="homeCartbutton1" />
      </SwiperSlide>
    );
  }

  return (
    <React.Fragment>
      <Swiper
        id="main1"
        tag="section"
        modules={[EffectCards]}
        effect={"cards"}
        wrapperTag="ul"
        navigation
        //   pagination
        loop={true}
        direction={"vertical"}
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

export default Slider1;
