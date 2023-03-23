import React from "react";
import Link from "next/link";
import CardSlide from "./CardSlide";


const Homepage = () => {
  return (
    <>

      <video loop muted autoPlay className="vidBG">
        <source src="/videos/bgloop.mp4" type="video/mp4" />
      </video>

      <div className="hero">
      <h1 style={{fontWeight: "900"}}>Airdrie's Neighborhood Barbershop: Affordable Prices, Exceptional Service</h1>

      <Link href={"/booking"}>
        <button>Book a haircut now</button>
      </Link>

      <p>Local charm meets professional quality. Our expert barbers are dedicated to providing you with the finest grooming experience 
        at prices that won't break the bank.
         Whether you need a classic cut or a modern style, our team will ensure you leave looking and feeling your best.
         Join our community of locals and experience the best in affordable grooming.</p>
      </div>

      <div className="googleSection">
          
      <div className="map">

      <a href="https://www.google.com/maps/place/Romantiko+Barber+Shop/@51.2911508,-114.0028717,338m/data=!3m1!1e3!4m6!3m5!1s0x53715f25208d2603:0xe5655ce1b5340234!8m2!3d51.2910039!4d-114.0030376!16s%2Fg%2F11qgyl2v4v" target="_blank">
        <img src="/img/homepage/map.JPG"></img>
      </a>
      </div>

      <div className="review">
        <CardSlide/>

      </div>


      </div>
    </>
  );
};

export default Homepage;
