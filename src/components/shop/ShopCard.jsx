import React from 'react';
import Image from "next/image";
import styles from "/styles/ShopCard.module.css"

const ShopCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Image className={styles.img} src="/img/shavingCream.jpg" alt="" width="400" height="400"/> 
                    <div className={styles.title}>
                        Product Name
                    </div>  
            </div>
        </div>
        /*

        <Image src="/img/shavingCream.jpg" alt="" width="400" height="400"/>
        <h1 className={styles.title}>Product Name</h1>
        
        <div className={styles.info}>
        <span className={styles.description}>Description Here </span>
        <span className={styles.price}>$20+gst</span>
        </div>
        */
    );
}

export default ShopCard;
