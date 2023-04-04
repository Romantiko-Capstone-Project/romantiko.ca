import React from "react";
import CalendarView from "./CalendarView";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();
  const accountID = useSelector((state) => state.auth.accountID);
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const [errorMess, setErrorMessage] = useState("");
  const [error, setError] = useState(false);
  const [staffId, setStaffId] = useState("");
  const [staffFullName, setStaffFullName] = useState("");
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // check if user is logged in
    if (!loggedIn) {
      router.push("/Login");
    }

    const getStaff = async (accountID) => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/staff/account/${accountID}`
        );
        setStaffId(response.data._id);
        setStaffFullName(
          response.data.firstName + " " + response.data.lastName
        );
      } catch (error) {
        console.error(error);
      }
    };

    getStaff(accountID);
  }, []);

  useEffect(() => {
    const getBookings = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/schedule/details/${staffId}`
        );

        const bookingsWithServiceNames = await Promise.all(
          response.data.map(async (booking) => {
            const service = await getService(booking.service);
            return {
              ...booking,
              serviceName: service ? service.name : "Unknown",
            };
          })
        );

        setBookings(bookingsWithServiceNames);
      } catch (error) {
        setError(true);
        setErrorMessage("Failed to get booking");
        console.error(error);
      }
    };

    if (staffId) {
      getBookings();
    }
  }, [staffId]);

  const getService = async (serviceId) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/services/${serviceId}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return (
    <div className="cont">
      <div>Hello {staffFullName}</div>
      <h1>Dashboard</h1>
      <CalendarView bookings={bookings} />
    </div>
  );
};

export default Dashboard;
