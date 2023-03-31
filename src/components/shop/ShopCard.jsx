import React from 'react';
import Image from "next/image";
import styles from "/styles/ShopCard.module.css";
import Link from "next/link";

const ShopCard = ({product}) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Link href={`/product/${product._id}`} passHref>
                    <Image src={product.img} alt="" width="250" height="250"/> 
                </Link>
                <h1 className={styles.title}>{product.productName}</h1>
                <span className={styles.price}>${product.price}</span>
                <p className={styles.desc}>
                    {product.description}
                </p>
            </div>
        </div>
    );
}

export default ShopCard;
