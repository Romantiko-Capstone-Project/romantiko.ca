import { useEffect, useState } from "react";
import UserForm from "./UserForm";
import styles from "/styles/BookingCard.module.css";
import axios from "axios";

const BookingCard = ({ startTime, endTime, selectedService }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

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

  const handleSubmit = (e) => {
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
    axios
      .post("http://localhost:3000/api/booking/", bookingData)
      .then((response) => {
        console.log(response.data); // handle response
      })
      .catch((error) => {
        console.error(error); // handle error
      });
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

        <div className={styles.booking_section}>
          <div className={styles.booking_info}>
            <h2>Booking Info</h2>
            <div>Start Time: {startTime}</div>
            <div>End Time: {endTime}</div>
            {selectedService && (
              <div>Service Type: {selectedService.serviceName}</div>
            )}
          </div>
        </div>
      </div>

      <button className={styles.submit_button} type="submit">
        Submit
      </button>
    </form>
  );
};

export default BookingCard;
