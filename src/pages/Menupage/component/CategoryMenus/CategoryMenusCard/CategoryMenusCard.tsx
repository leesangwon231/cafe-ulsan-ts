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
       <span>{menuData?.name}</span>
       <span>{menuData?.price}</span>
       <span>{menuData?.description}</span>
    </div>
  );
}

export default CategoryMenusCard;