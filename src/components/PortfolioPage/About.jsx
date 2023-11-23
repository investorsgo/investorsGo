import React from 'react';
import darkModeLogo from '../assets/darkModeLogo.png';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const handleClickRegister = () => navigate('register');
  return (
    <div className='w-full bg-white py-20 px-10 text-black'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold text-2xl'>Investor Meets Investment</p>
          <h1 className='md:text-1xl sm:text-1xl text-1xl font-bold py-2'>About investorsGo</h1>
          <p>
          Welcome to investorsGo, where the world of investment opportunities meets cutting-edge analytics. We are passionate about connecting investors with the perfect investment opportunities to help them achieve their financial goals.

          </p>
          <p className='py-3'>
          At investorsGo, we understand that every investor is unique, and the path to financial success varies for each individual. That's why we've built a platform that harnesses the power of advanced analytics and data-driven insights to match investors with investments that align with their interests, risk tolerance, and financial objectives. We work with our clients to help make your investment dreams an investment reality. 
          </p>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      <img className='w-[150px]' src={darkModeLogo} alt='logo' />
        <div className='flex flex-col justify-end'>
          <h1 className='md:text-1xl sm:text-1xl text-1xl font-bold py-2'>Features for Clients</h1>
          <p>- Advertise Your Product, Idea, Business</p>
          <p>- Live Chat with Investors</p>
          <p>- Faster & Better Contract Curation</p>
          <p>- Client Dashboard</p>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-1xl sm:text-1xl text-1xl font-bold py-2'>Features for Investors</h1>
          <p>- Background Checks </p>
          <p>- Fast Support</p>
          <p>- Low Royalty Fee</p>
          <p>- Investors Dashboard</p>
          <p>- Keep Track of Investments</p>
          <p>- Advanced Insights</p>
          <button className='bg-black text-[#00bf63] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3' onClick={handleClickRegister}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default About;