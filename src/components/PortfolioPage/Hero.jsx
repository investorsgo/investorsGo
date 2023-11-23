import React from 'react';
import Typed from 'react-typed';
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const handleClickRegister = () => navigate('register');

  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] ws-full h-screen mx-auto text-center flex flex-col justify-center'>
      <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
        investors<span className='text-[#00bf63]'>Go</span>
      </h1>
      <div className='flex justify-center items-center'>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2  text-[#00bf63]'
            strings={['Sell a Business.', 'Buy a Business.', 'Invest in a Business.', 'Fund a Business']}
            typeSpeed={180}
            backSpeed={180}
            loop
          />
        </div>
        <p className='md:text-3xl text-xl font-bold text-gray-500 py-3xs pt-8'>Aligning Vision and Investment for Success.</p>
        <button className='bg-[#00bf63] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black' onClick={handleClickRegister}>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;