import React from 'react';
import Image from "next/image";
import styles from "/styles/ShopCard.module.css"

const ShopCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>Service Name</h1>
                    <div className={styles.info}>
                        <span className={styles.description}>30 minutes</span>
                        <span className={styles.price}>$20+gst</span>
                    </div>
                </div>
            </div>
                <div className={styles.right}>
                    <div className={styles.imgContainer}>
                        <Image src="/img/service.png" alt="" width="100" height="100"/>
                    </div>
                </div>  
        </div>
    );
}

export default ShopCard;
