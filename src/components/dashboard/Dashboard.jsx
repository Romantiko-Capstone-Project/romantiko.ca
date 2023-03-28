import React from 'react';
import CalendarView from './CalendarView';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import { useRouter } from 'next/router';

const Dashboard = () => {
    const router = useRouter();
    const accountID = useSelector((state) => state.auth.accountID);
    const loggedIn = useSelector((state) => state.auth.loggedIn);
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
       // getBookings();
       //login check
       if (!loggedIn){
        router.push("/Login");
       }
    }, [])

    return (
        <div className="cont">



            <h1>Dashboard</h1>
            <CalendarView />

        </div>
    );
}

export default Dashboard;
