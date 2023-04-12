import React, { useEffect, useState } from "react";
import styles from "../../../styles/BookingTab.module.css";
import axios from "axios";

const BookingTab = () => {
  const [bookings, setBookings] = useState([]);
  const [barbers, setBarbers] = useState([]);
  const [services, setServices] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchBy, setSearchBy] = useState("id"); // Add this state for search filter
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bookingData = await axios.get(
          "http://localhost:3000/api/booking"
        );
        setBookings(bookingData.data);

        const barberData = await axios.get("http://localhost:3000/api/staff");
        setBarbers(barberData.data);

        const serviceData = await axios.get(
          "http://localhost:3000/api/services"
        );
        setServices(serviceData.data);
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
      setSuccess("Booking deleted successfully.");
      setError("");
    } catch (error) {
      console.log(error);
      setError("An error occurred while deleting the booking.");
      setSuccess("");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
      setSuccess("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [error, success]);

  const getBarberName = (id) => {
    const barber = barbers.find((barber) => barber._id === id);
    return barber ? `${barber.firstName} ${barber.lastName}` : "N/A";
  };

  const getServiceName = (id) => {
    const service = services.find((service) => service._id === id);
    return service ? service.serviceName : "N/A";
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredBookings = () => {
    if (searchBy === "id") {
      return bookings.filter((booking) =>
        booking._id.slice(-5).toLowerCase().includes(searchInput.toLowerCase())
      );
    } else if (searchBy === "barber") {
      return bookings.filter((booking) => {
        const barberName = getBarberName(booking.barber).toLowerCase();
        return barberName.includes(searchInput.toLowerCase());
      });
    } else if (searchBy === "client") {
      return bookings.filter((booking) =>
        booking.customerName.toLowerCase().includes(searchInput.toLowerCase())
      );
    } else if (searchBy === "date") {
      return bookings.filter((booking) => {
        const bookingDate = new Date(booking.startTime).toLocaleDateString();
        return bookingDate.includes(searchInput);
      });
    } else if (searchBy === "service") {
      return bookings.filter((booking) => {
        const serviceName = getServiceName(booking.service).toLowerCase();
        return serviceName.includes(searchInput.toLowerCase());
      });
    }
  };

  const getPlaceholderText = () => {
    switch (searchBy) {
      case "id":
        return "Search by last 5 characters of ID";
      case "barber":
        return "Search by Barber Name";
      case "client":
        return "Search by Client Name";
      case "date":
        return "Search by Booking Date";
      case "service":
        return "Search by Service";
      default:
        return "";
    }
  };

  const displayedBookings = filteredBookings();

  return (
    <div className={styles.container}>
      {error && <div className={styles.errorMessage}>{error}</div>}
      {success && <div className={styles.successMessage}>{success}</div>}
      <div className={styles.searchContainer}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder={getPlaceholderText()}
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        <div className={styles.dropdown}>
          <button className={styles.filterButton}>▼</button>
          <div className={styles.dropdownContent}>
            <a onClick={() => setSearchBy("id")}>Search by ID</a>
            <a onClick={() => setSearchBy("barber")}>Search by Barber Name</a>
            <a onClick={() => setSearchBy("client")}>Search by Client Name</a>
            <a onClick={() => setSearchBy("date")}>Search by Booking Date</a>
            <a onClick={() => setSearchBy("service")}>Search by Service</a>
          </div>
        </div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Booking ID (Last 5 Digits)</th>
            <th>Client Name</th>
            <th>Barber Name</th>
            <th>Booking Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Service</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {displayedBookings.map((booking) => (
            <tr key={booking._id}>
              <td>{"..." + booking._id.slice(-5)}</td>
              <td>{booking.customerName}</td>
              <td>{getBarberName(booking.barber)}</td>
              <td>{new Date(booking.startTime).toLocaleDateString()}</td>
              <td>{new Date(booking.startTime).toLocaleTimeString()}</td>
              <td>{new Date(booking.endTime).toLocaleTimeString()}</td>
              <td>{getServiceName(booking.service)}</td>
              <td>
                <button onClick={() => handleDelete(booking._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTab;
