import styles from "/styles/ServiceList.module.css";
import ServiceCard from "./ServiceCard";
import axios from "axios";
import { useEffect, useState } from "react";

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/services/");
        setServices(res.data);
      } catch (err) {}
    };
    getServices();
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Services</h1>
      <div className={styles.wrapper}>
      {services.map(service => (
        <ServiceCard service={service} key={service._id}/>
      ))}
        
      </div>
    </div>
  );
};

export default ServiceList;
