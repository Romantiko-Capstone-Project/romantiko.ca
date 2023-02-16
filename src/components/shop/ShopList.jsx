import React from 'react';
import styles from "/styles/ShopList.module.css";
import ShopCard from "./ShopCard";

const ShopList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Shop</h1>
            <p className={styles.desc}>
                Welcome to the our hair product shop! We offer a wide variety 
                of high-quality hair products from some of the most well-known 
                and trusted brands in the industry
            </p>

            <div className={styles.wrapper}>
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
            </div>
        </div>
    );
}

export default ShopList;
