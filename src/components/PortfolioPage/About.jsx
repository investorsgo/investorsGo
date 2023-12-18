import React, { useState, useRef } from 'react';
import FeaturesForInvestors_1 from '../assets/FeaturesForInvestors-1.png';
import FeaturesForInvestors_2 from '../assets/FeaturesForInvestors-2.png';
import FeaturesForInvestors_3 from '../assets/FeaturesForInvestors-3.png';
import FeaturesForInvestors_4 from '../assets/FeaturesForInvestors-4.png';
import FeaturesForInvestors_5 from '../assets/FeaturesForInvestors-5.png';
import FeaturesForInvestors_6 from '../assets/FeaturesForInvestors-6.png';
import FeaturesForInvestors_7 from '../assets/FeaturesForInvestors-7.png';

const About = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleButtonClick = (direction) => {
    const maxIndex = 6; 
    let newIndex;

    if (direction === 'prev') {
      newIndex = Math.max(0, currentIndex - 1);
    } else {
      newIndex = Math.min(maxIndex, currentIndex + 1);
    }

    setCurrentIndex(newIndex);
    updateScroll(newIndex);
  };

  const updateScroll = (index) => {
    if (carouselRef.current) {
      const scrollAmount = index * carouselRef.current.children[0].offsetHeight;
      carouselRef.current.scrollTo({
        top: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='bg-[#00bf63] py-5 px-40'>
      <div className="h-96 carousel carousel-vertical rounded-box" ref={carouselRef}>
        {/* Your carousel items here */}
        <div id="item1" className="carousel-item h-full">
          <img className="w-[350px]" src={FeaturesForInvestors_1} alt="slide" />
        </div>
        <div className="carousel-item h-full">
          <img className="w-[350px]" src={FeaturesForInvestors_2} alt="slide" />
        </div>
        <div className="carousel-item h-full">
          <img className="w-[350px]" src={FeaturesForInvestors_3} alt="slide" />
        </div>
        <div className="carousel-item h-full">
          <img className="w-[350px]" src={FeaturesForInvestors_4} alt="slide" />
        </div>
        <div className="carousel-item h-full">
          <img className="w-[350px]" src={FeaturesForInvestors_5} alt="slide" />
        </div>
        <div className="carousel-item h-full">
          <img className="w-[350px]" src={FeaturesForInvestors_6} alt="slide" />
        </div>
        <div id="item2" className="carousel-item h-full">
          <img className="w-[350px]" src={FeaturesForInvestors_7} alt="slide" />
        </div>
      </div>
      <div className="flex w-full py-2 gap-2">
        <button onClick={() => handleButtonClick('prev')} className="btn btn-xs">
          &lt;
        </button>
        <button onClick={() => handleButtonClick('next')} className="btn btn-xs">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default About;
