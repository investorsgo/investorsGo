import React, {useState} from 'react';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';
import Helmet from 'react-helmet';

import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";

export const loggedIn = false; 

export const email = 'info@investorsgo.co';
export const firstName = 'investorsGo';
export const lastName = 'Support';

function EmailConfirmation() {
    return(
        <div className='grid grid-cols-1 w-full'>
        <div className='flex flex-col justify-center py-20'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg p-8 px-8 bg-base-200'>
                    <div className="shadow-2xl p-0.1">
                        <p className="md:text-3xl sm:text-2xl font-bold mb-6 text-white text-center">Confirm Your Email</p>
                        <div className='flex flex-col text-gray-400 p-2'>
                            <label>6 Digit Code*</label>
                            <input className='rounded-lg bg-gray-500 mt-2 p-2 focus:outline-none w-full' type="number" required/>
                            <button className='w-full my-5 p-2 bg-[#00bf63] text-white font-semibold rounded-lg hover:bg-teal-500'>Confirm</button>
                            <p>A confirmation email has been sent to {email}.</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

function Register() {

  const navigate = useNavigate();
  const handleClickLogin = () => navigate('/login'); 
  const handleClickPrivacyPolicy = () => navigate('/privacypolicy');

  const [selectedYear, setSelectedYear] = React.useState('');
  const [selectedDay, setSelectedDay] = React.useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showEmailConfirmation, setShowEmailConfirmation] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const years = [];
  for (let year = 2023; year >= 1920; year--) {
    years.push(year);
  }

  const days = Array.from({ length: 31 }, (_, index) => index + 1);

  return (
    <div>
      <Navbar />
      <Helmet>
      <title>Register | investorsGo</title>
      </Helmet>
      {!showEmailConfirmation &&
      <div className='grid grid-cols-1 w-full'>
        <div className='flex flex-col justify-center py-20'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg p-8 px-8 bg-base-200'>
                    <div className="shadow-2xl p-0.1">
                        <p className="md:text-3xl sm:text-2xl font-bold mb-6 text-white text-center">Sign Up Today!</p>
                        <div className='flex flex-col text-gray-400 p-2'>
                            <label>Email*</label>
                            <input className='rounded-lg bg-gray-500 mt-2 p-2 focus:outline-none w-full' type="email" required/>
                        </div>
                        <div className='flex flex-col text-gray-400 p-2'>
                            <label>First Name*</label>
                            <input className='rounded-lg bg-gray-500 mt-2 p-2 focus:outline-none w-full' type="firstName" required/>
                        </div>
                        <div className='flex flex-col text-gray-400 p-2'>
                            <label>Last Name*</label>
                            <input className='rounded-lg bg-gray-500 mt-2 p-2 focus:outline-none w-full' type="lastName" required/>
                        </div>
                        <div className='flex-col text-gray-400 py-2'>
                                <label className='px-2'>Date of Birth*</label>
                            <div className='flex'>
                                <div className='px-2'>
                                    <select className="select w-full max-w-xs" required>
                                        <option disabled selected required>Month</option>
                                        <option>January</option>
                                        <option>February</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>June</option>
                                        <option>July</option>
                                        <option>August</option>
                                        <option>September</option>
                                        <option>October</option>
                                        <option>November</option>
                                        <option>December</option>
                                    </select>
                                </div>
                                <div>
                                <select className="select w-full max-w-xs" value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)} required>
                                    <option value="" disabled>Day</option>
                                    {days.map((days) => (
                                    <option key={days} value={days}>
                                        {days}
                                    </option>
                                    ))}
                                </select>
                                </div>                 
                                <div className='px-2'>
                                <select className="select w-full max-w-xs" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} required>
                                    <option value="" disabled>Year</option>
                                    {years.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                    ))}
                                </select>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col text-gray-400 p-2 relative'>
                            <label>Password*</label>
                            <input className='p-2 rounded-lg bg-gray-500 mt-2 focus:outline-none' type={showPassword ? 'text' : 'password'} required/>
                            <span className='absolute right-2 top-2 cursor-pointer' onClick={togglePasswordVisibility}>
                                {showPassword ? <IoEyeOffSharp /> : <IoEyeSharp/>}
                            </span>
                        </div>
                        <div className='flex flex-col text-gray-400 p-2'>
                            <label>Confirm Password*</label>
                            <input className='p-2 rounded-lg bg-gray-500 mt-2 focus:outline-none' type="password" required/>
                        </div>
                        <div className='flex text-gray-400 py-2'>
                            <p className='flex items-center text-[#00bf63] underline' onClick={handleClickLogin}>Have an Account?</p>
                        </div>
                        <div className='py-2'>
                            <input className="mr-1" type="checkbox" required/>                            
                            <label> I have read and agreed to the <span className='text-[#00bf63] underline'>Terms and Conditions</span> and the <span className='text-[#00bf63] underline hover:cursor-pointer' onClick={handleClickPrivacyPolicy}>Privacy Policy</span>.</label>
                        </div>
                        <button className='w-full my-5 p-2 bg-[#00bf63] text-white font-semibold rounded-lg hover:bg-teal-500' onClick={() => setShowEmailConfirmation(!showEmailConfirmation)}>Register</button>
                        </div>
                    </form>
            </div>
        </div>}
        {showEmailConfirmation && <EmailConfirmation />}    
    </div>
  );
}


export default Register;
