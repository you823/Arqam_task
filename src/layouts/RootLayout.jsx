// src/layouts/RootLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarComp from '../Components/ui/Navbar/NavbarComp.jsx';
import HeroSection from '../Components/HeroSection/HeroSection.jsx';
import TickerBar from '../Components/common/TickerBar/TickerBar.jsx';

const RootLayout = () => {
  return (
    <div className="app-container">
      <header>
        <NavbarComp />
        <HeroSection />
      </header>
      <main className="main-content">
        <Outlet />
      </main>
      <TickerBar />
    </div>
  );
};

export default RootLayout;