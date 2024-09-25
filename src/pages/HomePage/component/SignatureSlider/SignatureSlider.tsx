import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Scrollbar} from "swiper/modules";
import { MenusInfo} from "../../../../model/menu";
import SignatureCard from "./SignatureCard/SignatureCard";
import "./SignatureSlider.css"

interface SignatureType {
    signatureMenu : MenusInfo;
}

const SignatureSlider: React.FC<SignatureType>  = ({signatureMenu}) => {
  return (
      <div className={"inner"}>
          <div className={"signature-title"}>
                <h3 data-aos="fade-up">酌掛園林 시그니쳐</h3>
                <span>酌掛園林 Signature</span>
          </div>
          <div className={"signature-slider"}>
              <Swiper
                  scrollbar={{
                      hide: true,
                  }}
                  loop={true}
                  modules={[Scrollbar]}
                  className="signature-slider"
                  slidesPerView={3}
              >
                  {signatureMenu?.map((menu, index) => (
                      <SwiperSlide key={index}>
                          <SignatureCard signatureMenu={menu}/>
                      </SwiperSlide>
                  ))}
              </Swiper>
          </div>
      </div>

  );
}

export default SignatureSlider;