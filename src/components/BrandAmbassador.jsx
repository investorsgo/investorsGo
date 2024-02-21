import React from 'react';
import Helmet from 'react-helmet';

import Navbar from './Navbar';

import {FiCopy} from 'react-icons/fi';
 
var code = "v12345b";

const BrandAmbassador = () => {

  const preventLoad = async (e) =>{
    e.preventDefault();
  }
  return(
    <div className='text-white'>
      <Helmet>
        <title>Brand Ambassador | investorsGo</title>
      </Helmet>
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center px-10">
            <h1 className="text-4xl font-bold">The <span className='text-[#00bf63]'>Brand Ambassador</span> Program!</h1>
            <h2 className='text-1xl font-bold py-3'>Get up to $2000 in Rewards. Limitations Apply. </h2>
            <h3>The Brand Ambassador Program is a referral program created to help investorsGo increase its clients and investors. In exchange, after certain milestones, program members can earn prizes. To see prizes and milestones, click on "Check Rewards".</h3>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={preventLoad}>
              <div className="form-control">
                <h2 className="label mb-6 font-bold">
                  Your Brand Ambassador Referral Code
                </h2>
                <input type="code" placeholder={code} className="input input-bordered" readOnly />
              </div>
              <div className='flex text-gray-400 py-2'>
                    <p className='flex items-center text-[#00bf63] underline'>Check Rewards</p>
                </div>
              <div className="form-control mt-2">
                <button className="btn bg-[#00bf63] text-black" onClick={() => {navigator.clipboard.writeText(code)}}><span className="px-3"><FiCopy size={20}/></span>Copy</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandAmbassador;