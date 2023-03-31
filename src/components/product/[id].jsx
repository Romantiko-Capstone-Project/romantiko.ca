import React from 'react';
import Image from "next/image";
import styles from "/styles/Product.module.css"
import { useState } from "react";
import axios from "axios";


const Product = ({product}) => {

    const [productList, setProductList] = useState([]);

    // useEffect(() => {
    // const fetchProduct = async () => {
    //     try {
    //     const { data } = await axios.get("http://localhost:3000/api/products/${product._id}");
    //     setProduct(data);
    //     } catch (err) {
    //     console.log(err);
    //     }
    // };
    // fetchProduct();
    // }, []);

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src="/img/hairOil.jpg" objectFit="contain" layout="fill" alt="" />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{product.productName}</h1>
                <span className={styles.price}>${product.price}</span>
                <p className={styles.desc}>{product.description}</p>
            </div>
        </div>
    );
}


// export const getServerSideProps = async ({params}) => {
//     const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
//     return{
//         props:{
//         product:res.data,
//         }
//     };
// };

export default Product;