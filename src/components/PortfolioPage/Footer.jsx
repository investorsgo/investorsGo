import React from "react";
import { useNavigate } from "react-router-dom";

import darkModeLogo from '../assets/darkModeLogo.png';
import { FaInstagram} from "react-icons/fa";
import {FaXTwitter, FaThreads} from "react-icons/fa6";

const Footer = () => {

  const navigate = useNavigate();
  const handleClickPrivacyPolicy = () => navigate('/privacypolicy');

  const handleClickInstagram = () => {
    const instagramURL = 'https://www.instagram.com/investorsgo.co/';
    window.open(instagramURL, '_blank');
  };

  const handleClickX = () => {
    const xURL = 'https://twitter.com/investorsGo';
    window.open(xURL, '_blank')
  }

  const handleClickThreads = () => {
    const threadsURL = 'https://www.threads.net/@investorsgo.co';
    window.open(threadsURL, '_blank');
  }
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
        <img className='w-[150px]' src={darkModeLogo} alt='logo' />
          <div>
            <p className="px-10">Copyright © 2023 - All Right Reserved</p>
            <p className="px-10">Contact us at <span className="text-[#00bf63]">info@investorsgo.co</span></p>
          </div>
        <p className="px-2 text-[#00bf63]">Terms and Conditions</p>
        <p className="text-[#00bf63] hover:cursor-pointer" onClick={handleClickPrivacyPolicy}>Privacy Policy</p>
      </aside> 
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <div className="group">
          <FaInstagram size={30} className="transition-opacity duration-100 ease-in-out group-hover:opacity-50 hover:cursor-pointer" onClick={handleClickInstagram}/>
        </div>
        <div className="group">
          <FaThreads size={30} className="transition-opacity duration-100 ease-in-out group-hover:opacity-50 hover:cursor-pointer" onClick={handleClickThreads} />
        </div>
        <div className="group">
          <FaXTwitter size={30} className="transition-opacity duration-100 ease-in-out group-hover:opacity-50 hover:cursor-pointer" onClick={handleClickX}/>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
