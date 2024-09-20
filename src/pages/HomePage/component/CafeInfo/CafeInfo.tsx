import React, {useEffect} from 'react';
import "./CafeInfo.css"
import AOS from 'aos'
const CafeInfo = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={"cafe_Info"}>
        <div data-aos="fade-up" data-aos-delay="10">a</div>
        <div data-aos="fade-up" data-aos-delay="20">b</div>
        <div data-aos="fade-up" data-aos-delay="30">c</div>
        <div data-aos="fade-up" data-aos-delay="40">d</div>
        <div data-aos="fade-up" data-aos-delay="50">e</div>
    </div>
  );
}

export default CafeInfo;