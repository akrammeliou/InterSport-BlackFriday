import React from 'react';
import Cro from "../component/Cro";
import Slider from '../component/Slider';
import BonPlan from '../component/BonPlan';
import CoupCoeur from '../component/CoupCoeur';
const Home = () => {
    
    return (
        <div>
           <Cro></Cro>
           <Slider></Slider>
           <BonPlan></BonPlan>
           <CoupCoeur></CoupCoeur>
        </div>
    );
};

export default Home;