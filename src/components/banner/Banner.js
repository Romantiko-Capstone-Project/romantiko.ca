import React from "react";
import styles from "/styles/Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.imgContainer}>
      <div className={styles.banner_text}>
        <p>
          Set an appointment for haircut now, with this free and easy online
          booking
        </p>
      </div>
    </div>
  );
};

export default Banner;
