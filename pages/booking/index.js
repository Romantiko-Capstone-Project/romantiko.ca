import { useEffect, useState } from "react";
import Banner from "../../src/components/banner/Banner";
import ServiceCard from "../../src/components/service/ServiceCard";
import BookingCard from "../../src/components/booking/BookingCard";
import styles from "/styles/Booking.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
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
    setSelectedEndTime(selectedStartTime + 30);

    if (selectedDate instanceof Date && !isNaN(selectedDate)) {
      const formattedDate = format(selectedDate, "yyyy-MM-dd");
      const startTime = `${formattedDate}T${selectedStartTime}:00:00Z`;
      const endTime = `${formattedDate}T${selectedStartTime + 30}:00:00Z`;
      setBookingTime([startTime, endTime]);
    }
  };

  return (
    <div className={styles.main}>
      <Banner />
      <div className={styles.container}>
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
      <div className={styles.booking_container}>
        <div className={styles.date_wrapper}>
          <h3>Select Time</h3>
          
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
              orientation="landscape"
              className={styles.date_picker}
              onChange={(newDate) => setSelectedDate(newDate.$d)}
            />
          </LocalizationProvider>
        </div>

        <div className={styles.time_wrapper}>
          <h4>Availability</h4>
          {selectedDate instanceof Date && (
            <p>Selected date: {selectedDate.toDateString()}</p>
          )}

          <div className={styles.timeSlot}>
            <div>
              {timeSlots.map((slot) => (
                <button
                  className={styles.time_button}
                  key={slot.startTime}
                  disabled={slot.isBooked}
                  onClick={() => {
                    setSelectedStartTime(slot.startTime);
                    handleGetTime(slot.startTime);
                  }}
                >
                  {format(
                    new Date().setHours(
                      Math.floor(slot.startTime / 100),
                      slot.startTime % 100
                    ),
                    "h:mma"
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

       
      </div>

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
