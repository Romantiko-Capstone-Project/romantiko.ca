import React from "react";
import Image from "next/image";
import styles from "/styles/Product.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Product = () => {
  const [selected, setSelected] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/products/${id}`
        );
        setSelected(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={selected.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{selected.productName}</h1>
        <span className={styles.price}>${selected.price}</span>
        <p className={styles.desc}>{selected.description}</p>
      </div>
    </div>
  );
};

export default Product;
// export const getServerSideProps = async ({params}) => {
//     const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
//     return{
//         props:{
//         product:res.data,
//         }
//     };
// };
