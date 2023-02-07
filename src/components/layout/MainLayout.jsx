import React from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';

function MainLayout({children}) {
  return (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
  );
};

export default MainLayout;
