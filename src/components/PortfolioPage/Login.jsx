import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';

import { IoEyeSharp, IoEyeOffSharp } from 'react-icons/io5';

function Login() {
  const navigate = useNavigate();
  const handleClickRegister = () => navigate('/register');

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Navbar />
      <Helmet>
        <title>Log-In | investorsGo</title>
      </Helmet>
      <div className="grid grid-cols-1 w-full">
        <div className="flex flex-col justify-center py-40">
          <div className="max-w-[400px] w-full mx-auto rounded-lg overflow-hidden shadow-2xl">
            <p className="md:text-3xl sm:text-2xl font-bold md:py-6 py-[10rem] flex items-center justify-center text-white">Welcome Back!</p>
            <form className="px-8 py-6">
              <div className="flex flex-col py-2 text-gray-400">
                <label>Email</label>
                <input
                  className="rounded-lg mt-2 p-2 focus:outline-none bg-gray-500"
                  type="email"
                />
              </div>
              <div className="flex flex-col py-2 relative text-gray-400">
                <label>Password</label>
                <input
                  className="p-2 rounded-lg mt-2 focus:outline-none bg-gray-500"
                  type={showPassword ? 'text' : 'password'}
                  required
                />
                <span className="absolute right-2 top-2 cursor-pointer" onClick={togglePasswordVisibility}>
                  {showPassword ? <IoEyeOffSharp /> : <IoEyeSharp />}
                </span>
              </div>
              <div className="flex justify-between py-2">
                <p className="flex items-center">
                  <input className="mr-2" type="checkbox" />Remember Me
                </p>
                <p>Forgot Password?</p>
              </div>
              <div className="flex py-2">
                <p className="flex items-center text-[#00bf63] underline" onClick={handleClickRegister}>
                  Create an Account
                </p>
              </div>
              <button className="w-full my-5 py-2 bg-[#00bf63] text-white font-semibold rounded-lg hover:bg-teal-500">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
