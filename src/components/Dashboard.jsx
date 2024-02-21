import React from 'react';
import Helmet from 'react-helmet';
import Navbar from './Navbar';

function Dashboard() {
  return (
    <div className='text-white'>
      <Helmet>
        <title>Dashboard | investorsGo</title>
      </Helmet>
      <Navbar />
      <div className='grid grid-cols-3 gap-4'>
        {/* User Search Bar and Sidebar */}
        <div className='col-span-1 border-r border-gray-400 p-4'>
          {/* Your content for the Left section */}
          <h2 className='text-xl font-bold mb-4'>Left Section</h2>
          <p>Your content goes here.</p>
        </div>

        {/* User Feed */}
        <div className='col-span-1 p-4'>
          {/* Your content for the Center section */}
          <h2 className='text-xl font-bold mb-4'>Center Section</h2>
          <p>Your content goes here.</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
