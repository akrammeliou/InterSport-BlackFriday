import React from 'react';
import {Route,Routes} from "react-router-dom"
import Home from '../pages/Home';
import Noutfound from '../pages/Noutfound';


const Allroutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route element={<Noutfound/>} />
            </Routes>
        </div>
    );
};

export default Allroutes;