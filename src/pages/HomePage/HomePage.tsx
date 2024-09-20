import React, {useEffect, useState} from 'react';
import {MenusInfo} from "../../model/menu";
import {useMenuInfo} from "../../hooks/useMenuInfo";
import MenuPage from "../Menupage/MenuPage";
import {useMainImages} from "../../hooks/useMainImages";
import {MainPageImage} from "../../model/main";
import Slider from "./component/Slider/Slider";
import CafeInfo from "./component/CafeInfo/CafeInfo";

const HomePage:React.FC = () => {

  const [mainPageImageData , setMainPageImageData] = useState<MainPageImage>({
    logo : "",
    image : []
  });

  const [menuData,setMenuData] = useState<MenusInfo>([]);

  const {data:fetchedMenuData} = useMenuInfo();
  const {data:fetchedMainData} = useMainImages();


  useEffect(() => {

    setMenuData(fetchedMenuData);
    setMainPageImageData({...fetchedMainData})
  }, [fetchedMenuData,fetchedMainData]);

  return (
    <div className={"homepage"}>
      <Slider image = {mainPageImageData?.image}/>
      <MenuPage info={menuData}/>
      <CafeInfo/>
    </div>
  );
}

export default HomePage;