import React from 'react';
import Helmet from 'react-helmet';

import Navbar from './Navbar';
import Hero from './PortfolioPage/Hero';
import About from './PortfolioPage/About';
import Footer from './PortfolioPage/Footer';
import Dashboard from './Dashboard';
import { loggedIn } from './PortfolioPage/Register';

function Home() {

  return (
    <div>
      <Helmet>
      <title>investorsGo</title>
      </Helmet>
      {loggedIn &&
      <ul>
      <Dashboard/>
      </ul>
      }
      {!loggedIn &&
      <ul>
      <Navbar />
      <Hero />
      <About />
      <Footer />
      </ul>
      }
    </div>
  );
}

export default Home;
