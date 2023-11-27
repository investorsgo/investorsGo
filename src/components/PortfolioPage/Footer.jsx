import React from "react";
import { useNavigate } from "react-router-dom";

import darkModeLogo from '../assets/darkModeLogo.png';
import { FaInstagram, FaDiscord } from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

const Footer = () => {

const navigate = useNavigate();
const handleClickPrivacyPolicy = () => navigate('/privacypolicy');
const handleClickInstagram = () => {
  const instagramURL = `https://www.instagram.com/investorsgo.co/`;
  window.open(instagramURL, '_blank');
};
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
        <img className='w-[150px]' src={darkModeLogo} alt='logo' />
        <p className="px-10">Copyright © 2023 - All Right Reserved</p>
        <p className="px-2 text-[#00bf63]">Terms and Conditions</p>
        <p className="text-[#00bf63] hover:cursor-pointer" onClick={handleClickPrivacyPolicy}>Privacy Policy</p>
      </aside> 
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <div className="group">
          <FaInstagram size={30} className="transition-opacity duration-100 ease-in-out group-hover:opacity-50 hover:cursor-pointer" onClick={handleClickInstagram}/>
        </div>
        <div className="group">
          <FaDiscord size={30} className="transition-opacity duration-100 ease-in-out group-hover:opacity-50 hover:cursor-pointer" />
        </div>
        <div className="group">
          <FaXTwitter size={30} className="transition-opacity duration-100 ease-in-out group-hover:opacity-50 hover:cursor-pointer" />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
