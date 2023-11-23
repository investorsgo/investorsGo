import React from "react";
import darkModeLogo from '../assets/darkModeLogo.png';
import { FaInstagram, FaDiscord } from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
        <img className='w-[150px]' src={darkModeLogo} alt='logo' />
        <p className="px-10">Copyright © 2023 - All Right Reserved</p>
        <p className="px-2 text-[#00bf63]">Terms and Conditions</p>
        <p className="text-[#00bf63]">Privacy Policy</p>
      </aside> 
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <div className="group">
          <FaInstagram size={30} className="transition-opacity duration-100 ease-in-out group-hover:opacity-50" />
        </div>
        <div className="group">
          <FaDiscord size={30} className="transition-opacity duration-100 ease-in-out group-hover:opacity-50" />
        </div>
        <div className="group">
          <FaXTwitter size={30} className="transition-opacity duration-100 ease-in-out group-hover:opacity-50" />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
