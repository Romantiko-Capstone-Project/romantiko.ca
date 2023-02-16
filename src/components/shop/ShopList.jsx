import React from 'react';
import styles from "/styles/ShopList.module.css";
import ShopCard from "./ShopCard";
import Image from "next/image";

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
                
                <div className={styles.cardContainer}>
                    <div className={styles.cardLeft}>
                        <div className={styles.cardWrapper}>
                            <h1 className={styles.cardTitle}>Pomade</h1>
                            <div className={styles.cardInfo}>
                                <span className={styles.cardDescription}>
                                    A hair styling product that provides a shiny, slick look and a strong hold.
                                </span>
                                <span className={styles.cardPrice}>$20+gst</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cardRight}>
                        <div className={styles.cardImgContainer}>
                            <Image src="/img/service.png" alt="" width="100" height="100"/>
                        </div>
                    </div>  
                </div>
{/*BREAK */}
                <div className={styles.cardContainer}>
                    <div className={styles.cardLeft}>
                        <div className={styles.cardWrapper}>
                            <h1 className={styles.cardTitle}>Hair Gel</h1>
                            <div className={styles.cardInfo}>
                                <span className={styles.cardDescription}>
                                    A hair styling product that provides a firm hold and shiny finish.
                                </span>
                                <span className={styles.cardPrice}>$20+gst</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cardRight}>
                        <div className={styles.cardImgContainer}>
                            <Image src="/img/service.png" alt="" width="100" height="100"/>
                        </div>
                    </div>  
                </div>
{/*BREAK */}
                <div className={styles.cardContainer}>
                    <div className={styles.cardLeft}>
                        <div className={styles.cardWrapper}>
                            <h1 className={styles.cardTitle}>Hair Spray</h1>
                            <div className={styles.cardInfo}>
                                <span className={styles.cardDescription}>
                                    A hair styling product that provides a long-lasting hold and helps control frizz.
                                </span>
                                <span className={styles.cardPrice}>$20+gst</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cardRight}>
                        <div className={styles.cardImgContainer}>
                            <Image src="/img/service.png" alt="" width="100" height="100"/>
                        </div>
                    </div>  
                </div>
{/*BREAK */}
                <div className={styles.cardContainer}>
                    <div className={styles.cardLeft}>
                        <div className={styles.cardWrapper}>
                            <h1 className={styles.cardTitle}>Hair Wax</h1>
                            <div className={styles.cardInfo}>
                                <span className={styles.cardDescription}>
                                    A hair styling product that provides a matte finish and a strong hold, ideal for short haircuts.
                                </span>
                                <span className={styles.cardPrice}>$20+gst</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cardRight}>
                        <div className={styles.cardImgContainer}>
                            <Image src="/img/service.png" alt="" width="100" height="100"/>
                        </div>
                    </div>  
                </div>
{/*BREAK */}
                <div className={styles.cardContainer}>
                    <div className={styles.cardLeft}>
                        <div className={styles.cardWrapper}>
                            <h1 className={styles.cardTitle}>Hair Tonic</h1>
                            <div className={styles.cardInfo}>
                                <span className={styles.cardDescription}>
                                    A scalp treatment product that helps strengthen hair and promote healthy growth.
                                </span>
                                <span className={styles.cardPrice}>$20+gst</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cardRight}>
                        <div className={styles.cardImgContainer}>
                            <Image src="/img/service.png" alt="" width="100" height="100"/>
                        </div>
                    </div>  
                </div>
{/*BREAK */}
                <div className={styles.cardContainer}>
                    <div className={styles.cardLeft}>
                        <div className={styles.cardWrapper}>
                            <h1 className={styles.cardTitle}>Shampoo</h1>
                            <div className={styles.cardInfo}>
                                <span className={styles.cardDescription}>
                                    A hair care product used to cleanse the scalp and hair of dirt, oil, and product buildup.
                                </span>
                                <span className={styles.cardPrice}>$20+gst</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cardRight}>
                        <div className={styles.cardImgContainer}>
                            <Image src="/img/service.png" alt="" width="100" height="100"/>
                        </div>
                    </div>  
                </div>
{/*BREAK */}
                <div className={styles.cardContainer}>
                    <div className={styles.cardLeft}>
                        <div className={styles.cardWrapper}>
                            <h1 className={styles.cardTitle}>Conditioner</h1>
                            <div className={styles.cardInfo}>
                                <span className={styles.cardDescription}>
                                    A hair care product used to moisturize and detangle hair after shampooing.
                                </span>
                                <span className={styles.cardPrice}>$20+gst</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cardRight}>
                        <div className={styles.cardImgContainer}>
                            <Image src="/img/service.png" alt="" width="100" height="100"/>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default ShopList;
