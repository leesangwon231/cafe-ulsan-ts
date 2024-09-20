import React from 'react';
import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import {Route, Routes} from "react-router-dom";
import LayOut from "./layout/LayOut";

const App : React.FC = () => {
  return (
    <div className="App">

        <Routes>
            <Route path="/" element={<LayOut/>}>
                <Route index element={<HomePage/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
