import React, { useEffect, useState } from "react";
import styles from "/styles/ShopList.module.css";
import ShopCard from "./ShopCard";
import axios from "axios";

const ShopList = () => {

  const [productList, setProductList] = useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/products");
        setProductList(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SHOP PRODUCTS</h1>
      <p className={styles.desc}>
        Products catered to the unique hair care needs of every individual.
      </p>
      <div className={styles.wrapper}>
        {productList.map((product) => (
          <ShopCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopList;
