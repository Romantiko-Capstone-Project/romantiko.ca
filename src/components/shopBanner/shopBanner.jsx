import React from "react";
import styles from "/styles/ShopBanner.module.css";
import Image from "next/image";

const ShopBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/img/shopBanner.jpg" alt="" layout="fill" objectFit="contain"/>
        <div className={styles.overlay}>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;
