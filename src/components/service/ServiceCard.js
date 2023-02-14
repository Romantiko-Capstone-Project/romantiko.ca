import styles from "/styles/ServiceCard.module.css";
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper_left}>
        <div className={styles.service_header}>
          <h1 className={styles.service_title}>{service.serviceName}</h1>
        </div>

        <div className={styles.service_details}>
          <span className={styles.service_description}>
            {service.description}
          </span>
          <span className={styles.service_price}>$ {service.price}</span>
          <button className={styles.button}>Add Service</button>
          <button className={styles.button}>Remove Service</button>
        </div>
      </div>

      <div className={styles.wrapper_right}>
        <img className={styles.service_img} src={service.img} alt="" />
      </div>
    </div>
  );
};

export default ServiceCard;
