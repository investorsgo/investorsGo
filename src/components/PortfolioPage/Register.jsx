import React from 'react';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';
import Helmet from 'react-helmet';

export const loggedIn = false; 

function Register() {

  const navigate = useNavigate();
  const handleClickLogin = () => navigate('/login'); 

  const [selectedYear, setSelectedYear] = React.useState('');
  const [selectedDay, setSelectedDay] = React.useState('');

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
      <div className='grid grid-cols-2 w-full'>
        <div className='hidden sm:block'>
        </div>
        <div className='flex flex-col justify-center py-20'>
        <p className='md:text-3xl sm:text-2xl font-bold md:py-6 py-[10rem] flex items-center justify-center text-white'>Sign Up Today!</p>
                <form className='max-w-[400px] w-full mx-auto rounded-lgp-8 px-8'>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Email</label>
                        <input className='rounded-lg bg-gray-500 mt-2 p-2 focus:outline-none w-full' type="email" required/>
                    </div>
                    <div className='flex text-gray-400 py-2'>
                        <div className='flex-col'>
                            <label >First Name</label>
                            <input className='rounded-lg bg-gray-500 mt-2 p-2 focus:outline-none' type="First Name" required/>
                        </div>
                        <div className='flex-col px-4'>
                            <label>Last Name</label>
                            <input className='rounded-lg bg-gray-500 mt-2 p-2 focus:outline-none' type="Last Name" required/>
                        </div>
                    </div>
                    <div className='flex-col text-gray-400 py-2'>
                            <label>Date of Birth</label>
                        <div className='flex'>
                            <div className='px-2'>
                                <select className="select w-full max-w-xs">
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
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Password</label>
                        <input className='p-2 rounded-lg bg-gray-500 mt-2 focus:outline-none' type="password" required/>
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Confirm Password</label>
                        <input className='p-2 rounded-lg bg-gray-500 mt-2 focus:outline-none' type="password" required/>
                    </div>
                    <div className='flex text-gray-400 py-2'>
                        <p className='flex items-center text-[#00bf63] underline' onClick={handleClickLogin}>Have an Account?</p>
                    </div>
                    <div className='py-2'>
                        <input type="checkbox" className="checkbox w-5 h-5" required/>
                        <label> I have read the <span>Terms of Service</span> and <span>Privacy Policy</span></label>
                    </div>
                    <button className='w-full my-5 py-2 bg-[#00bf63] text-white font-semibold rounded-lg hover:bg-teal-500'>Register</button>
                </form>
        </div>
    </div>    
    </div>
  );
}

export default Register;
