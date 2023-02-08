import React from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import styles from '../../../styles/Home.module.css';

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
