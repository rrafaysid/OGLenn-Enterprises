import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-surface font-body">
      <Header />
      <main className="flex-1 pt-24 md:pt-[104px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
