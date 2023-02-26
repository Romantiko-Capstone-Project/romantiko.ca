import React from "react";
import Link from "next/link";
import Featured from "./Featured";

const Homepage = () => {
  return (
    <>

      <video loop muted autoPlay style={{
        position: "relative",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        left: 0,
        top: 0,
        zIndex: "0",
        margin: "0"
      }}>
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
    </>
  );
};

export default Homepage;
