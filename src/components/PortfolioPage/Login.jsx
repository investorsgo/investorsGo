import React from 'react';
import Helmet from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';


function Login() {
  
  const navigate = useNavigate();
  const handleClickRegister = () => navigate('/register');
  
  return (
    <div>
      <Navbar />
      <Helmet>
      <title>Log-In | investorsGo</title>
      </Helmet>
      <div className='grid grid-cols-1 w-full'>
        <div className='hidden sm:block'>
        </div>
        <div className='flex flex-col justify-center py-40'>
        <p className='md:text-3xl sm:text-2xl font-bold md:py-6 py-[10rem] flex items-center justify-center text-white'>Welcome Back!</p>
            <form className='max-w-[400px] w-full mx-auto rounded-lgp-8 px-8'>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Email</label>
                    <input className='rounded-lg bg-gray-500 mt-2 p-2 focus:outline-none' type="email"/>
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input className='p-2 rounded-lg bg-gray-500 mt-2 focus:outline-none' type="password"/>
                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox"/>Remember Me</p>
                    <p>Forgot Password?</p>
                </div>
                <div className='flex text-gray-400 py-2'>
                    <p className='flex items-center text-[#00bf63] underline' onClick={handleClickRegister}>Create an Account</p>
                </div>
                <button className='w-full my-5 py-2 bg-[#00bf63] text-white font-semibold rounded-lg hover:bg-teal-500'>Login</button>
                
            </form>
        </div>
    </div>    
    </div>
  );
}

export default Login;
