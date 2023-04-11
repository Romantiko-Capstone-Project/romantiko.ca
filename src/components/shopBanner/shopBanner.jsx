import React from "react";
import styles from "/styles/ShopBanner.module.css";
import Image from "next/image";

const ShopBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/img/shopBanner.jpg" alt="" layout="fill" objectFit="contain"/>
        <div className={styles.overlay}>
          <h2>Products catered to the unique hair care needs of every individual.</h2>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;
