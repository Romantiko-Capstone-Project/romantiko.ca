import styles from "/styles/ServiceCard.module.css"
import React from 'react';
import Image from "next/image";

const ServiceCard = () => {
    return(
        <div className={styles.container}>
            <Image src="/img/service.png" alt="" width="50" height="50"/>
            <h1 className={styles.title}>SERVICE NAME</h1>
            <span className={styles.price}>20.00</span>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adispisicing elit.
            </p>
        </div>
    );

}

export default ServiceCard;

