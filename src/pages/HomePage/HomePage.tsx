import React, {useEffect, useState} from 'react';
import {MenusInfo} from "../../model/menu";
import {useMenuInfo} from "../../hooks/useMenuInfo";
import {useMainImages} from "../../hooks/useMainImages";
import {MainPageImage} from "../../model/main";
import Slider from "./component/Slider/Slider";
import CafeInfo from "./component/CafeInfo/CafeInfo";
import SignatureSlider from "./component/SignatureSlider/SignatureSlider";
import AOS from "aos";
import Summary from "./component/Summary/Summary";

const HomePage:React.FC = () => {

  const [mainPageImageData , setMainPageImageData] = useState<MainPageImage>({
    logo : "",
    image : []
  });

  const [menuData,setMenuData] = useState<MenusInfo>([]);

  const {data:fetchedMenuData} = useMenuInfo();
  const {data:fetchedMainData} = useMainImages();

  const signatureMenu = fetchedMenuData?.filter((data : { category : string; }) => {
    return data.category === "signature";
  })

  const summary = fetchedMainData?.summary.image;



  useEffect(() => {
    AOS.init({
      offset: 300,
      once : false
    });
  }, []);

  useEffect(() => {

    setMenuData(fetchedMenuData);
    setMainPageImageData({...fetchedMainData})
    window.scrollTo(0, 0)
  }, [fetchedMenuData,fetchedMainData]);


  return (
      <div className={"homepage"}>
        <Slider image={mainPageImageData?.image}/>
        <CafeInfo/>
        <Summary summaryImage={summary}/>
        <SignatureSlider signatureMenu={signatureMenu}/>
      </div>
  );
}

export default HomePage;