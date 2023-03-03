import React from 'react';
import styles from "/styles/ShopList.module.css";
import Image from "next/image";
import HorizontalScroll from 'react-scroll-horizontal';
import ShopCard from "./ShopCard"


const ShopList = () => {
    
    return (
        <div className={styles.container}>
            {/* 

            <ul className={styles.searchBar}>
                <li className={styles.searchItem}>
                    <a href='#pomade'>Pomade</a>
                </li>
                <li className={styles.searchItem}>
                    <a href='#hair_care'>Hair Products</a>
                </li>
                <li className={styles.searchItem}>
                    <a href='#shaving'>Shaving Products</a>
                </li>
                <li className={styles.searchDesc}>
                    SHOP
                </li>
                <li className={styles.searchItem}>
                    <a href='#beard_care'>Beard Products</a>
                </li>
                <li className={styles.searchItem}>
                    <a href='#shampoo'>Shampoo</a>
                </li>
                <li className={styles.searchItem}>
                    <a href='#conditioner'>Conditioner</a>
                </li>
            </ul>


            
            <h1 className={styles.title}>Shop</h1>
            <p className={styles.desc}>
                Welcome to the our hair product shop! We offer a wide variety 
                of high-quality hair products from some of the most well-known 
                and trusted brands in the industry
            </p>
            <div className={styles.wrapper}>
                <div className={styles.cardContainer} id="pomade">
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
                            <Image src="/img/pomade.jpg" alt="" width="300" height="300"/>
                        </div>
                    </div>  
                </div>

                <div className={styles.cardContainer} id="hair_care">
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

                <div className={styles.cardContainer} id="beard_care">
                    <div className={styles.cardLeft}>
                        <div className={styles.cardWrapper}>
                            <h1 className={styles.cardTitle}>Beard Oil</h1>
                            <div className={styles.cardInfo}>
                                <span className={styles.cardDescription}>
                                    A specially-formulated grooming product designed to moisturize, 
                                    soften and nourish facial hair and the skin beneath.
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

                <div className={styles.cardContainer} id="shampoo">
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

                <div className={styles.cardContainer} id="conditioner">
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
            </div>*/}

        <ul className={styles.searchBar}>
                <li className={styles.searchItem}>
                    <a href='#pomade'>Pomade</a>
                </li>
                <li className={styles.searchItem}>
                    <a href='#hair_care'>Hair Products</a>
                </li>
                <li className={styles.searchItem}>
                    <a href='#shaving'>Shaving Products</a>
                </li>
                <li className={styles.searchDesc}>
                    SHOP
                </li>
                <li className={styles.searchItem}>
                    <a href='#beard_care'>Beard Products</a>
                </li>
                <li className={styles.searchItem}>
                    <a href='#shampoo'>Shampoo</a>
                </li>
                <li className={styles.searchItem}>
                    <a href='#conditioner'>Conditioner</a>
                </li>
            </ul>

            <div className={styles.scroll} id="pomade">
                <h1 className={styles.sectionTitle}>Pomade</h1>
            <HorizontalScroll>
                <div className={styles.pomadeScroll}>
                    <ShopCard/>
                </div>
                <div className={styles.pomadeScroll}>
                    <ShopCard/>
                </div>
                <div className={styles.pomadeScroll}>
                    <ShopCard/>
                </div>
                <div className={styles.pomadeScroll}>
                    <ShopCard/>
                </div>
                <div className={styles.pomadeScroll}>
                    <ShopCard/>
                </div>
            </HorizontalScroll>
            </div>

            <div className={styles.secondScroll} id="hair_care">
                <h1 className={styles.sectionTitle}>Hair Products</h1>
            <HorizontalScroll>
                <div className={styles.condScroll}>
                    <ShopCard/>
                </div>
                <div className={styles.condScroll}>
                    <ShopCard/>
                </div>
                <div className={styles.condScroll}>
                    <ShopCard/>
                </div>
                <div className={styles.condScroll}>
                    <ShopCard/>
                </div>
                <div className={styles.condScroll}>
                    <ShopCard/>
                </div>
            </HorizontalScroll>
            </div>

            <div className={styles.thirdScroll} id="shaving">
                <h1 className={styles.sectionTitle}>Shaving Products</h1>
            <HorizontalScroll>
                <div className={styles.condScroll}>
                    <ShopCard/>
                </div>
                <div className={styles.condScroll}>
                    <ShopCard/>
                </div>
                <div className={styles.condScroll}>
                    <ShopCard/>
                </div>
                <div className={styles.condScroll}>
                    <ShopCard/>
                </div>
                <div className={styles.condScroll}>
                    <ShopCard/>
                </div>
            </HorizontalScroll>
            </div>
        </div>
    );
}

export default ShopList;
