import { useEffect, useState } from "react";
import Banner from "../../src/components/booking/Banner";
import ServiceCard from "../../src/components/booking/ServiceCard";
import BookingCard from "../../src/components/booking/BookingCard";
import TimeSlot from "../../src/components/booking/TimeSlot";
import styles from "/styles/booking/Booking.module.css";
import axios from "axios";
import dayjs from "dayjs";

const Booking = () => {
  const [services, setServices] = useState([]);
  const [bookingTime, setBookingTime] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(dayjs());

  useEffect(() => {
    const getServices = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/services/");
        setServices(res.data);
      } catch (err) {}
    };
    getServices();
  }, []);

  useEffect(() => {
    const getTimeSlotData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/week/${selectedDate.toISOString()}`
        );
        setTimeSlots(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (selectedDate) {
      getTimeSlotData(selectedDate);
    }

    console.log(getTimeSlotData(selectedDate));
  }, [selectedDate]);

  return (
    <div className={styles.main}>
      <Banner />
      <div className={styles.service_container}>
        <h3 className={styles.title}>Select Service</h3>
        <div className={styles.service_wrapper}>
          {services.map((service) => (
            <ServiceCard
              service={service}
              key={service._id}
              onSelectService={setSelectedService}
            />
          ))}
        </div>
      </div>

      <h3 className={styles.title}>Select Time</h3>
      <div className={styles.booking_container}>
        <TimeSlot
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          timeSlots={timeSlots}
        />
      </div>
      <h3 className={styles.title}>Add your details</h3>
      <div className={styles.booking_card}>
        <BookingCard
          startTime={bookingTime[0]}
          endTime={bookingTime[1]}
          selectedService={selectedService}
        />
      </div>
    </div>
  );
};

export default Booking;
