import React from 'react';
import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import {Route, Routes} from "react-router-dom";
import LayOut from "./layout/LayOut";
import MenuPage from "./pages/Menupage/MenuPage";
import AboutUs from "./pages/AboutUsPage/AboutUsPage";

const App : React.FC = () => {
  return (
    <div className="App">

        <Routes>
            <Route path="/" element={<LayOut/>}>
                <Route index element={<HomePage/>}/>
                <Route path="products" element={<MenuPage/>}/>
                <Route path={"about"} element={<AboutUs/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
