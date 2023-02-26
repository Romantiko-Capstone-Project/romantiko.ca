import React from "react";
import Link from "next/link";
import Featured from "./Featured";
import styles from '../../../styles/Home.module.css';
const Homepage = () => {
  return (
    <>

      <video loop muted autoPlay style={{
        position: "relative",
        width: "100%",
        height: "95vh",
        objectFit: "cover",
        left: 0,
        top: 0,
        zIndex: "0",
        margin: "0"
      }}>
        <source src="/videos/bgloop.mp4" type="video/mp4" />
      </video>

      
    </>
  );
};

export default Homepage;
