import React from 'react';
import './Header.css'
import {useNavigate} from "react-router-dom";

const Header = () => {

    const navigator = useNavigate();


  return (
    <div className={"header_area"}>
        <div className={"logo_area"} onClick={()=>{navigator("/")}}>
            <img src={"https://coimg.jobkorea.co.kr/Company/Visual_Co/images/2023/06/JK_CO_vzeutw23060722313974.jpg"}/>
        </div>
        <div className={"header_menu"}>
            <ul>
                <li onClick={()=>(navigator("/about"))}>ABOUT US</li>
                <li onClick={()=>(navigator("/products"))}>PRODUCT</li>
            </ul>
        </div>
    </div>
  );
}

export default Header;