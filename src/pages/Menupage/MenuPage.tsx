import React, {useEffect} from 'react';
import {MenuInfo} from "../../model/menu";
import {useMenuInfo} from "../../hooks/useMenuInfo";
import "./MenuPage.css"
import CategoryMenus from "./component/CategoryMenus/CategoryMenus";
import AOS from "aos";




const MenuPage = () => {
  const menuKinds = ['signature','coffee','tea','latte','smoothie']
  const {data} = useMenuInfo();

  const  fliteringCategory = (menuCategory:string) => {
    const menus =  data?.filter((menu:MenuInfo) => {
      return menu.category === menuCategory
    });
    return { [menuCategory]: menus }
  }

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={"menu_page"}>
      {menuKinds?.map((category, index) => (
          <CategoryMenus categoryMenu={fliteringCategory(category)} index={index}/>
      ))}
    </div>
  );
}

export default MenuPage;