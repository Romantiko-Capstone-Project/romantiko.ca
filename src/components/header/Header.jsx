import React from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
function Header() {
  return (
    <>
    <Head>
        <title>Romantiko Barbershop</title>
        <meta name="description" content="Generated by create next app" />
        {/** Need to change ico - lenard */}
        <link rel="icon" href="/favicon.ico" /> 
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
      
      </Head>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Romantiko Barbershop</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
     
      <div className=" collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto ">
          <li className="nav-item">
            <a className="nav-link mx-2 active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2" href="#">Gallery</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2" href="#">Shop</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2" href="#">Booking</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2" href="/AboutUs">About Us</a>
          </li>

        </ul>
      </div>
    </div>
    </nav>
    </>
  )
}

export default Header