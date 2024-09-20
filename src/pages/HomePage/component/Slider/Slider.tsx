import React from 'react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import {SliderImage} from "../../../../model/main";
import { Scrollbar } from 'swiper/modules';
import "./Slider.css"

interface sliderType extends SliderImage{

}

const Slider:React.FC<sliderType> = ({image}) => {
  return (
    <div className={"slider"}>
        <Swiper
            scrollbar={{
                hide: true,
            }}
            modules={[Scrollbar]}
            className="mySwiper"
        >
          {image?.map((image, index) => (
              <SwiperSlide key={index}>
                  <img src={image} alt={`Slide ${index}`} />
              </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default Slider;