import { useEffect, useState } from "react";
import Banner from "../../src/components/booking/Banner";
import ServiceCard from "../../src/components/booking/ServiceCard";
import BookingCard from "../../src/components/booking/BookingCard";
import TimeSlot from "../../src/components/booking/TimeSlot";
import styles from "/styles/booking/Booking.module.css";
import axios from "axios";
import { format } from "date-fns";

const Booking = () => {
  const [services, setServices] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedStartTime, setSelectedStartTime] = useState(900);
  const [selectedEndTime, setSelectedEndTime] = useState(900);
  const [bookingTime, setBookingTime] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

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
    if (selectedDate instanceof Date && !isNaN(selectedDate)) {
      const dayOfWeek = format(selectedDate, "EEEE");
      console.log(dayOfWeek);
      const getTimeSlotData = async () => {
        try {
          const res = await axios.get(
            `http://localhost:3000/api/timeslot/day/${dayOfWeek}`
          );
          setTimeSlots(res.data);
        } catch (error) {}
      };
      getTimeSlotData();
    }
  }, [selectedDate]);

  const handleGetTime = (selectedStartTime) => {
    setSelectedStartTime(selectedStartTime);
    setSelectedEndTime(selectedStartTime + 30);

    if (selectedDate instanceof Date && !isNaN(selectedDate)) {
      const startTime = selectedDate.setHours(
        Math.floor(selectedStartTime / 100),
        selectedStartTime % 100,
        0,
        0
      );
      const endTime = selectedDate.setHours(
        Math.floor((selectedStartTime + 30) / 100),
        (selectedStartTime + 30) % 100,
        0,
        0
      );
      const formattedStartTime = formatDate(startTime);
      const formattedEndTime = formatDate(endTime);

      setBookingTime([formattedStartTime, formattedEndTime]);
    }
  };

  const formatDate = (date) => {
    const formattedDate = new Date(date).toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return formattedDate.replace(" at", "");
  };

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
          setSelectedDate={setSelectedDate}
          timeSlots={timeSlots}
          setSelectedStartTime={setSelectedStartTime}
          handleGetTime={handleGetTime}
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
