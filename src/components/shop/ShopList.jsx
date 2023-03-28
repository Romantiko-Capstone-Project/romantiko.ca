import React from 'react';
import styles from "/styles/ShopList.module.css";
import ShopCard from "./ShopCard"


const ShopList = ({productList}) => {
    
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>SHOP PRODUCTS</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className={styles.wrapper}>
                {productList.map((product) => (
                    <ShopCard key={product._id} product={product}/>
                ))}
            </div>
        </div>
    );
}

export default ShopList;
