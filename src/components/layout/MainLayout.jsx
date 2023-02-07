import React from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import styles from '../../../styles/Home.module.css';
import Head from 'next/head';

function MainLayout({children}) {
  return (
    <>
      <Head>
        <title>Romantiko Barbershop</title>
        <meta name="description" content="Generated by create next app" />
        {/** Need to change ico - lenard */}
        <link rel="icon" href="/favicon.ico" /> 
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
      
      </Head>
        <Header/>
        <main className={styles.main}>
        {children}
        </main>
        <Footer/>
    </>
  );
};

export default MainLayout;
