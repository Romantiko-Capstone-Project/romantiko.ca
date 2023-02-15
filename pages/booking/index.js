import Banner from "../../src/components/banner/Banner";
import TimeSlotTable from "../../src/components/schedule/TimeSlotTable";
import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "../../src/components/service/ServiceCard";
import styles from "/styles/Booking.module.css"
import moment from "moment";

const Booking = () => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [date, setDate] = useState(moment().startOf("week"));
  const [timeSlotsData, setTimeSlotsData] = useState([]);
  const [time, setTime] = useState([]);

  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/api/timeslot/");
      setTimeSlotsData(response.data);
    };

    fetchData();
  }, []);

  const handleClick = (timeSlot) => {
    setTime(timeSlot.startTime);
    // Book the time slot
  };
  

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
    <>
      <Banner />
      <div className={styles.container}>
        <h1 className={styles.title}>Services</h1>
        <div className={styles.wrapper}>
          {services.map((service) => (
            <ServiceCard service={service} key={service._id} />
          ))}
        </div>
      </div>
      <TimeSlotTable />
      {/* 
        <BarberList />
        <MuiPicker />
        <ClientInformation /> */}
    </>
  );
};

export default Booking;
