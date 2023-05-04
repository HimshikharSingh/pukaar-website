import React, { useState } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination]);

const Carousel = () => {
  const [swiper, setSwiper] = useState(null);

  const handlePrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  return (
    <div className="relative mx-10">
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        onSwiper={setSwiper}
      >
        <SwiperSlide>
          <div className="bg-[#ffecb2] h-64 rounded-lg flex justify-center items-center text-[#292929] text-2xl font-bold">
            <div>
              <div className="flex justify-center">Slide 1</div>

              <div className="flex justify-center">content 1</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#ffecb2] h-64 rounded-lg flex justify-center items-center text-[#292929] text-2xl font-bold">
            <div>
              <div className="flex justify-center">Slide 2</div>

              <div className="flex justify-center">content 2</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#ffecb2] h-64 rounded-lg flex justify-center items-center text-[#292929] text-2xl font-bold">
            <div>
              <div className="flex justify-center">Slide 3</div>

              <div className="flex justify-center">content 3</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#ffecb2] h-64 rounded-lg flex justify-center items-center text-[#292929] text-2xl font-bold">
            <div>
              <div className="flex justify-center">Slide 4</div>

              <div className="flex justify-center">content 4</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#ffecb2] h-64 rounded-lg flex justify-center items-center text-[#292929] text-2xl font-bold">
            <div>
              <div className="flex justify-center">Slide 5</div>

              <div className="flex justify-center">content 5</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#ffecb2] h-64 rounded-lg flex justify-center items-center text-[#292929] text-2xl font-bold">
            <div>
              <div className="flex justify-center">Slide 6</div>

              <div className="flex justify-center">content 6</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute top-0 left-0 flex justify-center items-center h-full w-12">
        <button
          className="swiper-button-prev text-white text-xl"
          onClick={handlePrev}
        ></button>
      </div>
      <div className="absolute top-0 right-0 flex justify-center items-center h-full w-12">
        <button
          className="swiper-button-next text-white text-xl"
          onClick={handleNext}
        ></button>
      </div>
    </div>
  );
};

export default Carousel;
