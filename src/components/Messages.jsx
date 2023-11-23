import React from 'react';
import Helmet from 'react-helmet';

import Navbar from './Navbar';


function Messages() {
  return (
    <div>
      <Helmet>
      <title>Messages | investorsGo</title>
      </Helmet>
      <Navbar />
    </div>
  );
}

export default Messages;