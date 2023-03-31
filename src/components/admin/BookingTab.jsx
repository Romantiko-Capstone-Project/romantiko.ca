import React, { useEffect, useState } from "react";
import styles from "../../../styles/AdminBooking.module.css";
import axios from "axios";
const BookingTab = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/booking");
        setBookings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [bookings]);
  return (
    <div className={styles.container}>
      {bookings.map((booking) => (
        <>
          <div className={styles.booking} key={booking._id}>
            <h3>Start Time: {booking.startTime} </h3>
            <h3>End Time: {booking.endTime} </h3>
            <h3>Barber Id: {booking.barber} </h3>
            
          </div>
          <br></br>
        </>
      ))}
    </div>
  );
};

export default BookingTab;
