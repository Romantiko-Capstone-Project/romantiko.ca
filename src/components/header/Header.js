import React from "react";
import Link from "next/link";
function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">Romantiko Barbershop</a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link href="/" aria-current="page">
                  <a className="nav-link mx-2">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <Link href="/booking">
                  <a className="nav-link mx-2">Booking</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about-us">
                  <a className="nav-link mx2">About Us</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
