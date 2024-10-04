import React from 'react';
import { MenusInfo} from "../../../../model/menu";
import CategoryMenusCard from "./CategoryMenusCard/CategoryMenusCard";
import "./CategoryMenus.css"
interface categoryMenuType {
    categoryMenu: {
        [category: string]: MenusInfo;
    },
    index : number
}



const CategoryMenus : React.FC<categoryMenuType> = ({categoryMenu, index} ) => {
  return (
      <div className={"CategoryMenus_container"}>
          {Object.keys(categoryMenu).map((categoryData) => (
              <div>
                  <h1
                      className={`${index % 2 === 0 ? "CategoryMenu_Title_Right" : "CategoryMenu_Title_Left"}`}
                      data-aos={`${index % 2 === 0 ? "fade-right" : "fade-left"}`}
                  >
                      {categoryData}
                  </h1>
                  <div
                      className={ `${index % 2 === 0 ? "CategoryMenu_Area_Right" : "CategoryMenu_Area_Left"}`}
                      data-aos={`${index % 2 === 0 ? "fade-right" : "fade-left"}`}
                  >
                      {categoryMenu[categoryData]?.map((menuData) => (
                          <CategoryMenusCard menuData={menuData}/>
                      ))}
                  </div>
              </div>
          ))}
      </div>
  );
}

export default CategoryMenus;