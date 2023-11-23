import React from 'react';
import Helmet from 'react-helmet';

import Navbar from './Navbar';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {BsFillCartCheckFill} from 'react-icons/bs';

function MessageNotification(){
  return(
  <div className="alert shadow-lg">
    <BiMessageSquareDetail/>
    <div>
      <h3 className="font-bold">New message!</h3>
      <div className="text-xs">You have 1 unread message</div>
    </div>
    <button className="btn btn-sm">See</button>
  </div>
  )
}

  function PurchaseSuccessNotification(){
    return(
    <div className="flex alert alert-success">
      <BsFillCartCheckFill />
      <span className='px-4'>Your purchase has been confirmed!</span>
    </div>
    )
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
        <div className='border-0 outline-1 outline-white outline-dashed items-center justify-center px-8 mx-auto '> 
        <PurchaseSuccessNotification />
        <MessageNotification />
        </div>
      </div>
    </div>
  );
}

export default Notifications;
