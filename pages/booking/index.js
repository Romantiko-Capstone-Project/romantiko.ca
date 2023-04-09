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
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [selectedStaffId, setSelectedStaffId] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const getServices = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/services/");
        setServices(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getServices();
  }, []);

  const handleSelectService = () => {
    if (selectedService) {
      setCurrentStep(1);
    } else {
      alert("Please select a service first");
    }
  };

  const handleSelectTimeSlot = () => {
    if (selectedDate  && selectedTimeSlot  && selectedStaff ) {
      setCurrentStep(2);
    } else {
      alert("Please select a Date, Time, and Staff");
    }
  };

  

  return (
    <div className={styles.main}>
      <Banner />

      {currentStep == 0 && (

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

          <div>
            <button onClick={handleSelectService}>Next</button>
          </div>

        </div>

      )}




      {currentStep == 1 && (
        <>
          <h3 className={styles.title}>Select Time</h3>
          <div className={styles.booking_container}>
            <TimeSlot
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              selectedTimeSlot={selectedTimeSlot}
              setSelectedTimeSlot={setSelectedTimeSlot}
              setSelectedStaff={setSelectedStaff}
              setSelectedStaffId={setSelectedStaffId}
              setBookingTime={setBookingTime}
            />
          </div>
          <div>
            <button onClick={setCurrentStep(0)}>Back</button>
            <button onClick={handleSelectTimeSlot}>Next</button>
          </div>
        </>
      )}




      {currentStep == 2 && (
        <>
          <h3 className={styles.title}>Add your details</h3>
          <div className={styles.booking_container}>
            <BookingCard
              startTime={bookingTime[0]}
              endTime={bookingTime[1]}
              selectedService={selectedService}
              selectedStaff={selectedStaff}
              selectedStaffId={selectedStaffId}
            />
          </div>
        </>
      )}





    </div>

  );
};

export default Booking;
