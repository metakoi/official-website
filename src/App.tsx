import React, { useEffect } from 'react';
import {
  HashRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';

import AOS from 'aos';

import Home from './pages/Home';
import CommingSoon from './pages/CommingSoon';
import PageNotFound from './pages/PageNotFound';
import Litepaper from './pages/Litepaper';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 500,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    // document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    // document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route path="/official-website/" element={<Home />} />
        <Route path="/official-website/mysterybox" element={<CommingSoon />} />
        <Route path="/official-website/litepaper" element={<Litepaper />} />
        <Route path="/official-website/market" element={<CommingSoon />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
