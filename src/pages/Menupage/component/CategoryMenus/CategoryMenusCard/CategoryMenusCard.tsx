import React from 'react';
import {MenuInfo} from "../../../../../model/menu";
import "./CategoryMenusCard.css"

interface CategoryMenusCardType{
    menuData : MenuInfo
}

const CategoryMenusCard:React.FC<CategoryMenusCardType> = ({menuData}) => {
  return (
    <div className={"CategoryMenusCard"}>
       <img src={menuData?.image}></img>
       <span className={"CategoryMenusCard_name"}>{menuData?.name}</span>
       <span className={"CategoryMenusCard_price"}>₩ {menuData?.price}</span>
       <span className={"CategoryMenusCard_description"}>{menuData?.description}</span>
    </div>
  );
}

export default CategoryMenusCard;