import styles from "/styles/ServiceCard.module.css";
import React from "react";

const ServiceCard = ({ service, onSelectService }) => {
  return (
    <div className={styles.container}>
      <div className={styles.radio_buttons}>
        <label>
          <input
            type="radio"
            name="service"
            value={service._id}
            onChange={() => onSelectService(service)}
          />
        </label>
      </div>
      <div className={styles.service_container}>
        <span className={styles.service_details}>{service.serviceName}</span>
        <span className={styles.service_details}>${service.price}</span>
        <span className={styles.service_details}>Duration: 30 mins</span>
      </div>
    </div>
  );
};

export default ServiceCard;
