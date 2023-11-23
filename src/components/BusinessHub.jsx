import React from 'react';
import Helmet from 'react-helmet';

import Navbar from './Navbar';


function BusinessHub() {
  return (
    <div>
      <Helmet>
      <title>BusinessHub | investorsGo</title>
      </Helmet>
      <Navbar />
    </div>
  );
}

export default BusinessHub;