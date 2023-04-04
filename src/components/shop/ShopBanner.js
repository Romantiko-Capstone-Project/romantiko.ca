import React from "react";
import styles from "../../../styles/shop/ShopBanner.module.css"

const ShopBanner = () => {
  return (
    <div className={styles.imgContainer}>
      <div className={styles.banner_text}>
        <p>
          Tranform your look and shop from a range of excellent products.  
        </p>
      </div>
    </div>
  );
};

export default ShopBanner;