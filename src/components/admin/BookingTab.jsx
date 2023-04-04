import React, { useEffect, useState } from "react";
import styles from "../../../styles/BookingTab.module.css";
import axios from "axios";
// import BookingModal from "./BookingModal";

const BookingTab = () => {
  const [bookings, setBookings] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

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
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/booking/${id}`);
      const newBookings = bookings.filter((booking) => booking._id !== id);
      setBookings(newBookings);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (id, data) => {
    try {
      await axios.put(`http://localhost:3000/api/booking/${id}`, data);
      const newBookings = bookings.map((booking) => {
        if (booking._id === id) {
          return { ...booking, ...data };
        }
        return booking;
      });
      setBookings(newBookings);
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalOpen = (data) => {
    setModalOpen(true);
    setModalData(data);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setModalData({});
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Booking Dashboard</h1>
      <div className={styles.buttonContainer}>
        <button
          className={styles.addButton}
          onClick={() => handleModalOpen({})}
        >
          Add Booking
        </button>
      </div>
      <div className={styles.bookingsContainer}>
        {bookings.map((booking) => (
          <div className={styles.booking} key={booking._id}>
            <div className={styles.bookingInfo}>
              <h3>Start Time: {booking.startTime} </h3>
              <h3>End Time: {booking.endTime} </h3>
              <h3>Barber Id: {booking.barber} </h3>
            </div>
            <div className={styles.bookingActions}>
              <button
                className={styles.editButton}
                onClick={() => handleModalOpen(booking)}
              >
                Edit
              </button>
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(booking._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* {modalOpen && (
        <BookingModal
          data={modalData}
          handleModalClose={handleModalClose}
          handleCreate={handleCreate}
          handleUpdate={handleUpdate}
        />
      )} */}
    </div>
  );
};

export default BookingTab;
