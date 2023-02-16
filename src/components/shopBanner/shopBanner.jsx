import React from 'react';
import styles from "/styles/ShopBanner.module.css";
import Image from "next/image";

const ShopBanner = () => {
    return (
        <div>
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/img/bookingBanner.png" alt="" layout="fill" objectFit="contain"/>
            </div> 
        </div>
        </div>
    );
}

export default ShopBanner;
