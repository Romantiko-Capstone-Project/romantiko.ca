import { useState } from "react";
import UserForm from "./UserForm";
import styles from "/styles/booking/BookingCard.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const BookingCard = ({ startTime, endTime, selectedService }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const router = useRouter();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      startTime: startTime.toString(),
      endTime: endTime.toString(),
      service: selectedService._id,
      customerName: name,
      customerEmail: email,
      customerPhone: phone,
      notes: note,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/booking/",
        bookingData
      );
      const booking = response.data;

      // Redirect to ConfirmBooking page with the booking details
      router.push({
        pathname: "/booking/confirm-booking",
        query: {
          bookingId: booking._id,
          startTime,
          endTime,
          serviceName: selectedService.serviceName,
          name,
          email,
          phone,
          note,
        },
      });
    } catch (error) {
      console.error(error); // handle error
    }
  };

  return (
    
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.wrapper}>
        <div className={styles.booking_section}>
          <UserForm
            name={name}
            email={email}
            phone={phone}
            note={note}
            onNameChange={handleNameChange}
            onEmailChange={handleEmailChange}
            onPhoneChange={handlePhoneChange}
            onNoteChange={handleNoteChange}
            
          />
        </div>
        {startTime && endTime ? (
          <div className={styles.booking_section}>
            <div className={styles.booking_info}>
              <div>
                <h2>Booking Info</h2>
                <div>Start Time: {startTime}</div>
                <div>End Time: {endTime}</div>
              </div>

              {selectedService && (
                <div>Service Type: {selectedService.serviceName}</div>
              )}
            </div>
          </div>
        ) : null}
      </div>

      <button className={styles.submit_button} type="submit">
        Submit
      </button>
    </form>
  );
};

export default BookingCard;
