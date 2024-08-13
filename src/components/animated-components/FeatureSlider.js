import React, { useRef } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css/pagination";

export const FeatureSlider = ({ sliderPhotos }) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (_, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      centeredSlides
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      effect="slide"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      modules={[Pagination, Autoplay]}
      className="mx-auto w-10/12 rounded-xl"
    >
      {sliderPhotos?.map((val, idx) => (
        <SwiperSlide key={idx} className="w-full h-auto">
          <div className="relative w-full h-full pb-[56.25%]">
            <Image
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={val}
              alt={"Olympos Portal " + idx}
              height={600}
              width={1200}
            />
          </div>
        </SwiperSlide>
      ))}
      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
};
