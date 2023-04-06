import React from "react";
import Image from "next/image";
import styles from "../../styles/Service.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Service = () => {
  const [selected, setSelected] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchService = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/services/${id}`
        );
        setSelected(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchService();
  }, [id]);

  return (
    <div className={styles.container}>
          <div className={styles.left}>
              <div className={styles.imgContainer}>
                  <Image src={selected.img} width="600" height="400" alt="" />
              </div>
          </div>
      
          <div className={styles.right}>
                <div className={styles.serviceText}>
                    <h1 className={styles.title}>{selected.serviceName}</h1>
                    <span className={styles.price}>${selected.price}</span>
                    <p className={styles.desc}>{selected.description}</p>
                </div>
          </div>
    </div>
  );
};

export default Service;
