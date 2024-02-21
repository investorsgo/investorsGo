import React from 'react';
import Helmet from 'react-helmet';
import Navbar from './Navbar';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { BsFillCartCheckFill } from 'react-icons/bs';

import { useNavigate } from "react-router-dom";

export const unread = 1;

function MessageNotification() {

  const navigate = useNavigate();
  const handleClickMessages = () => navigate('/messages');

  return (
    <div className="alert shadow-lg flex items-center justify-between p-4 mb-4">
      <div className="flex items-center">
        <BiMessageSquareDetail size={24} />
        <div className="ml-4">
          <h3 className="font-bold text-base md:text-lg">New Message</h3>
          <div className="text-sm">You have {unread} unread messages! </div>
        </div>
      </div>
      <button className="btn btn-sm" onClick={handleClickMessages}>SEE</button>
    </div>
  );
}

function PurchaseSuccessNotification() {
  return (
    <div className="flex alert alert-success items-center p-4 mb-4">
      <BsFillCartCheckFill size={24} />
      <span className='ml-2 text-sm md:text-base'>Your purchase has been confirmed!</span>
    </div>
  );
}

function Notifications() {
  return (
    <div className='text-white'>
      <Helmet>
        <title> Notifications | investorsGo</title>
      </Helmet>
      <Navbar />
      <div>
        <p className='md:text-3xl sm:text-2xl font-bold md:py-6 py-[10rem] flex items-center justify-center'>Notifications</p>
        <div className='border-0 outline-1 outline-white outline-double items-center justify-center p-4 mx-auto w-2/3'>
          <PurchaseSuccessNotification />
          <MessageNotification />
        </div>
      </div>
    </div>
  );
}

export default Notifications;
