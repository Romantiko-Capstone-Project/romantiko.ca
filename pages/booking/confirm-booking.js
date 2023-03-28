import React from "react";
import { useRouter } from "next/router";
import styles from "/styles/booking/ConfirmBooking.module.css";

const ConfirmBooking = () => {
  const router = useRouter();

  const bookingId = router.query.bookingId;
  const startTime = router.query.startTime;
  const endTime = router.query.endTime;
  const serviceName = router.query.serviceName;

  const name = router.query.name;
  const email = router.query.email;
  const phone = router.query.phone;
  const note = router.query.note;

  return (
    <div className={styles.main}>
      <div className={`${styles.container} bg-dark`}>
        <div className={styles.booking_header}>
          <h1 className={styles.booking_title}>Your booking is confirmed!</h1>
          <h5 className={styles.booking_message1}>
            Thank you for booking with us. Your appointment details are below:
          </h5>
        </div>

        <div className={styles.booking_details}>
          <h4>Booking ID: {bookingId}</h4>
          <div className={styles.booking_content}>
            Service Type: {serviceName}
          </div>
          <div className={styles.booking_content}>Start Time: {startTime}</div>
          <div className={styles.booking_content}>End Time: {endTime}</div>
          <div className={styles.booking_content}>Name: {name}</div>
          <div className={styles.booking_content}>Email: {email}</div>
          <div className={styles.booking_content}>Phone: {phone}</div>
          <div className={styles.booking_content}>
            Notes to your barber: {note}
          </div>
          <p className={styles.booking_message2}>
            We look forward to seeing you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBooking;
