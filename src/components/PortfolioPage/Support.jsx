import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../Navbar';

function Support() {

  return (
    <div>
      <Navbar />
      <Helmet>
        <title> Support | investorsGo</title>
      </Helmet>
      <div className="grid grid-cols-1 w-full">
        <div className="flex flex-col justify-center py-20">
          <div className="max-w-[400px] w-full mx-auto rounded-lg overflow-hidden shadow-2xl bg-base-200">
            <p className="md:text-3xl sm:text-2xl font-bold md:py-6 py-[10rem] flex items-center justify-center text-white">Support</p>
            <form className="px-8 py-6">
              <div className="flex flex-col py-2 text-gray-400">
                <label>Email</label>
                <input
                  className="rounded-lg mt-2 p-2 focus:outline-none bg-gray-500"
                  type="email"
                />
              </div>
              <div className="flex flex-col py-2 text-gray-400">
                <label>First Name</label>
                <input
                  className="rounded-lg mt-2 p-2 focus:outline-none bg-gray-500"
                  type="firstName"
                />
              </div>
              <div className="flex flex-col py-2 text-gray-400">
                <label>Last Name</label>
                <input
                  className="rounded-lg mt-2 p-2 focus:outline-none bg-gray-500"
                  type="lastName"
                />
              </div>
              <div className="flex flex-col py-2 relative text-gray-400">
                <label>Please Select a Topic</label>
                <div className='flex py-2'>
                  <select className="select w-full max-w-xs" required>
                    <option disabled selected required>Please Select ...</option>
                    <option>General Question</option>
                    <option>Website Bug</option>
                    <option>Website Login Issues</option>
                    <option>Website Registration Issues</option>
                    <option>Payment Issues</option>
                    <option>Privacy Policy Questions</option>
                    <option>Terms and Conditions Questions</option>
                    <option>Account Deletion</option>
                    <option>Account Data</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col py-2 text-gray-400">
                <label>Description</label>
                <textarea
                  className="rounded-lg mt-2 p-2 focus:outline-none bg-gray-500 h-60"
                  rows="8"
                  required
                />
              </div>
              <button className="w-full my-5 py-2 bg-[#00bf63] text-white font-semibold rounded-lg hover:bg-teal-500">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
