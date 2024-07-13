import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Home from './Pages/Home.tsx';
import './index.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Destination from './Pages/Destination/Destination.tsx';
import Crew from './Pages/Crew.tsx';
import Technology from './Pages/Technology.tsx';
import Moon from './Pages/Destination/Moon.tsx';
import Mars from './Pages/Destination/Mars.tsx';
import Europa from './Pages/Destination/Europa.tsx';
import Titan from './Pages/Destination/Titan.tsx';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='destination' element={<Destination />}>
            <Route index element={<Moon />} />
            <Route path='moon' element={<Moon />} />
            <Route path='mars' element={<Mars />} />
            <Route path='europa' element={<Europa />} />
            <Route path='titan' element={<Titan />} />
          </Route>
          <Route path='crew' element={<Crew />} />
          <Route path='technology' element={<Technology />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
