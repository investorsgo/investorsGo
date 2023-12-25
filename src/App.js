import React, { Component } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import axios from 'axios';
import {Toaster} from 'react-hot-toast';

import Home from './components/Home';
import Login from './components/PortfolioPage/Login';
import Register from './components/PortfolioPage/Register';
import BusinessHub from './components/BusinessHub';
import Insights from './components/Insights';
import Messages from './components/Messages';
import Notifications from './components/Notifications';
import MembershipsLoggedIn from './components/Memberships';
import BrandAmbassador from './components/BrandAmbassador';
import PrivacyPolicy from './components/PortfolioPage/PrivacyPolicy';
import Support from './components/PortfolioPage/Support';

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.withCredentials = true

class App extends Component {
  render() {
    return (
      <>
      <Toaster position='bottom-right' toastOptions={{duration: 2000}}/>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/businesshub" element={<BusinessHub />} />
        <Route exact path="/insights" element={<Insights />} />
        <Route exact path="/messages" element={<Messages />} />
        <Route exact path="/notifications" element={<Notifications />} />
        <Route exact path="/membership" element={<MembershipsLoggedIn />} />
        <Route exact path="/brandambassador" element={<BrandAmbassador />} />
        <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route exact path="/support" element={<Support />} />
      </Routes>
    </BrowserRouter>
    </>
    );
  }
}

export default App;