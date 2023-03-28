import React from 'react';
import CalendarView from './CalendarView';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect,useState } from 'react';


const Dashboard = () => {
    const accountID = useSelector((state) => state.auth.accountID);

    const getBookings = async (e) => {
        console.log("found id =" + accountID);
        if (e) {
            e.preventDefault();
        }
        try {
            const response = await axios.post(
                "http://localhost:3000/api/schedule/",
                { accountID }
            );

            console.log(response.data);

        } catch (error) {
            setError(true);
            setErrorMessage("Failed to get booking");
            console.error(error);
        }
    };

    useEffect(() => {
        getBookings();
    }, [])

    return (
        <div className="cont">



            <h1>Dashboard</h1>
            <CalendarView />

        </div>
    );
}

export default Dashboard;
