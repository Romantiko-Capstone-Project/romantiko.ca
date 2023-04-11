import React, { useEffect, useState } from "react";
import tableStyles from "../../../styles/BookingTab.module.css";
import axios from "axios";

const BookingTab = () => {
  const [bookings, setBookings] = useState([]);
  const [barbers, setBarbers] = useState([]);
  const [services, setServices] = useState([]);
  const [searchInput, setSearchInput] = useState(""); // Add this state for search input

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
    } catch (error) {
      console.log(error);
    }
  };

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

  const filteredBookings = bookings.filter((booking) =>
    booking._id.slice(-5).toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      <div className={tableStyles.searchContainer}>
        <input
          className={tableStyles.searchInput}
          type="text"
          placeholder="Search by last 5 characters of ID"
          value={searchInput}
          onChange={handleSearchInputChange}
        />
      </div>
      <table className={tableStyles.table}>
        <thead>
          <tr>
            <th>Booking ID</th>
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
          {filteredBookings.map((booking) => (
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
