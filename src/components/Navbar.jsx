import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import {BiLogOut, BiHelpCircle} from "react-icons/bi";
import {BsMegaphone, BsPencilSquare} from "react-icons/bs";
import {FaRegNewspaper} from "react-icons/fa";
import {FiSettings} from "react-icons/fi";
import {GoVerified} from "react-icons/go";
import {LiaUserFriendsSolid} from "react-icons/lia";
import {CgProfile} from "react-icons/cg";

import darkModeLogo from './assets/darkModeLogo.png';
import { useNavigate } from "react-router-dom";
import { loggedIn } from "./PortfolioPage/Register";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const handleClickLogin = () => navigate('/login');
  const handleClickRegister = () => navigate('/register');
  const handleClickBusinessHub = () => navigate('/businesshub');
  const handleClickInsights = () => navigate('/insights');
  const handleClickNotifications = () => navigate('/notifications');
  const handleClickMessages = () => navigate('/messages');
  const handleClickMembership = () => navigate('/membership');
  const handleClickBrandAmbassador = () => navigate('/brandambassador');
  const handleClickHome = () => navigate('/');

  return (
    <div className="flex justify-between items-center h-24 text-white z-50 mx-auto bg-neutral">
      <img className='w-[150px]' src={darkModeLogo} alt='logo' onClick={handleClickHome} />
      {!loggedIn &&
      <ul className="hidden md:flex font-bold pr-8">
        <button className="p-4 hover:text-[#00bf63]" onClick={handleClickLogin}>Log-In</button>
        <button className="p-4 hover:text-[#00bf63]" onClick={handleClickRegister}>Register</button>
      </ul>
      }
      {loggedIn &&
      <ul className="hidden md:flex font-bold pr-8">
        <button className="p-6 hover:text-[#00bf63]" onClick={handleClickBusinessHub}>BusinessHub</button>
        <button className="p-6 hover:text-[#00bf63]" onClick={handleClickInsights}>Insights</button>
        <button className="p-6 hover:text-[#00bf63]" onClick={handleClickNotifications}>Notifications</button>
        <button className="p-6 hover:text-[#00bf63]" onClick={handleClickMessages}>Messages</button>

        <div className="dropdown dropdown-end ">
        <button className="p-6 hover:text-[#00bf63]">Account</button>
          <ul className="p-2 menu dropdown-content bg-base-100 rounded-box shadow-2xl">
          <button className="hover:bg-[#445760] p-3 flex"><span className="px-3"><BsPencilSquare size={20}/></span>Post</button>
          <button className="hover:bg-[#445760] p-3 flex"><span className="px-3"><CgProfile size={20}/></span>Profile</button>
          <button className="hover:bg-[#445760] p-3 flex"  onClick={handleClickMembership}><span className="px-3"><GoVerified size={20}/></span>investors<span className="text-[#00bf63]">+</span></button>
          <button className="hover:bg-[#445760] p-3 flex"><span className="px-3"><LiaUserFriendsSolid size={20}/></span>Friends</button>
          <button className="hover:bg-[#445760] p-3 flex"><span className="px-3"><FaRegNewspaper size={20}/></span>GoInvestorNewsletter</button>
          <button className="hover:bg-[#445760] p-3 flex" onClick={handleClickBrandAmbassador}><span className="px-3"><BsMegaphone size={20}/></span>Brand Ambassador</button>
          <button className="hover:bg-[#445760] p-3 flex"><span className="px-3"><FiSettings size={20}/></span>Settings</button>
          <button className="hover:bg-[#445760] p-3 flex border-b"><span className="px-3"><BiHelpCircle size={20}/></span>Help</button>
          <button className="hover:bg-[#445760] p-3 py-4 flex"><span className="px-3"><BiLogOut size={20}/></span>Log-Out</button>
          </ul>
          </div>
          
      </ul>
      }
      

      <div onClick={() => setNav(!nav)} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <GiHamburgerMenu size={20} />}
      </div>
      <div className={nav? "fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-900 bg-[#000300] ease-in-out duration-750": "fixed left-[-150%]"}>
      {!loggedIn &&
        <ul className="p-4 font-bold flex flex-col">
          <button className="p-4 border-b border-gray-450 hover:text-[#00bf63]" onClick={handleClickLogin}>Log-In</button>
          <button className="p-4 hover:text-[#00bf63]" onClick={handleClickRegister}>Register</button>
        </ul>
      }
      {loggedIn &&
        <ul className="p-4 font-bold flex flex-col">
        <button className="p-4 hover:text-[#00bf63]" onClick={handleClickBusinessHub}>BusinessHub</button>
        <button className="p-4 hover:text-[#00bf63]" onClick={handleClickInsights}>Insights</button>
        <button className="p-4 hover:text-[#00bf63]" onClcik={handleClickNotifications}>Notifications</button>
        <button className="p-4 hover:text-[#00bf63]" onClick={handleClickMessages}>Messages</button>

        <div className="dropdown items-center">
        <summary className="p-6 hover:text-[#00bf63]">Account</summary>
          <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
          <button className="hover:bg-[#445760] p-2 flex"><span className="px-3"><CgProfile size={20}/></span>Profile</button>
          <button className="hover:bg-[#445760] p-2 flex"><span className="px-3"><GoVerified size={20}/></span>investors<span className="text-[#00bf63]">+</span></button>
          <button className="hover:bg-[#445760] p-2 flex"><span className="px-3"><LiaUserFriendsSolid size={20}/></span>Friends</button>
          <button className="hover:bg-[#445760] p-2 flex"><span className="px-3"><FiSettings size={20}/></span>Settings</button>
          <button className="hover:bg-[#445760] p-2 flex border-b"><span className="px-3"><BiHelpCircle size={20}/></span>Help</button>
          <button className="hover:bg-[#445760] p-2 py-4 flex shadow-xl"><span className="px-3"><BiLogOut size={20}/></span>Log-Out</button>
          </ul>
          </div>

        </ul>
      }
      </div>
    </div>
  );
};

export default Navbar;