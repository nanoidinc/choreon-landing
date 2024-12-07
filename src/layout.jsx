import React from 'react';
import { Outlet } from 'react-router';
import { DataProvider } from './components/context/data';
import { Header, Footer } from './components';
import { Spacer } from './components/atoms';
import './styles/header.css';
import './styles/hero.css';
import './styles/cards.css';
import './styles/detail-with-img.css';
import './styles/spotlight.css';
import './styles/footer.css';
import './styles/responsive.css';

export const Layout = () => {
  return (
    <DataProvider>
      <Header />
      <Spacer type="section" />
      <Outlet />
      <Footer />
    </DataProvider>
  );
};
