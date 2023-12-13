import React from 'react';
import FeaturesForInvestors_1 from '../assets/FeaturesForInvestors-1.png';
import FeaturesForInvestors_2 from '../assets/FeaturesForInvestors-2.png';
import FeaturesForInvestors_3 from '../assets/FeaturesForInvestors-3.png';
import FeaturesForInvestors_4 from '../assets/FeaturesForInvestors-4.png';
import FeaturesForInvestors_5 from '../assets/FeaturesForInvestors-5.png';
import FeaturesForInvestors_6 from '../assets/FeaturesForInvestors-6.png';
import FeaturesForInvestors_7 from '../assets/FeaturesForInvestors-7.png';


const About = () => {
  return (
    <div className='bg-[#00bf63] py-5 px-40 text-black'>
      <div className="carousel carousel-center rounded-box">
        <div className="carousel-item">
          <img className="w-[350px]" src={FeaturesForInvestors_1} alt="intro" />
        </div> 
        <div className="carousel-item">
          <img className="w-[350px]" src={FeaturesForInvestors_2} alt="support" />
        </div> 
        <div className="carousel-item">
          <img className="w-[350px]" src={FeaturesForInvestors_3} alt="royaltyfee" />
        </div> 
        <div className="carousel-item">
          <img className="w-[350px]" src={FeaturesForInvestors_4} alt="insights" />
        </div> 
        <div className="carousel-item">
          <img className="w-[350px]" src={FeaturesForInvestors_5} alt="gocheck" />
        </div> 
        <div className="carousel-item">
          <img className="w-[350px]" src={FeaturesForInvestors_6} alt="ui" />
        </div> 
        <div className="carousel-item">
        <img className="w-[350px]" src={FeaturesForInvestors_7} alt="conclusion" />
        </div>
      </div>
    </div>
  );
};

export default About;
