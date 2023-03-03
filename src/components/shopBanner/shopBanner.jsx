import React from 'react';
import styles from "/styles/ShopBanner.module.css";

const ShopBanner = () => {
    return (
        <div className={styles.imgContainer}>
            <div className={styles.bannerText}>
                <p>
                    Transform your look and experience the best hair 
                    products in town.
                </p>
            </div>
        </div>
    );
}

export default ShopBanner;
