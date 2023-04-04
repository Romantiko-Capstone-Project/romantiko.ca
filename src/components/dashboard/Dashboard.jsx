import React from 'react';
import CalendarView from './CalendarView';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Dashboard = () => {
    const router = useRouter();
    const accountID = useSelector((state) => state.auth.accountID);
    const loggedIn = useSelector((state) => state.auth.loggedIn);
    const [schedule, setSchedule] = useState([])
    const [errorMess, setErrorMessage] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        // console.log("getuser..");
        const getUserName = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/staff/account/${accountID}`)
                console.log(response.data.firstname, response.data.lastname)
            } catch (error) {
                console.log("username error")
                console.error(error);
            }
        }
        getUserName();
    }, [])

    useEffect(() => {
        // getBookings();
        //login check
        if (!loggedIn) {
            router.push("/Login");
        }

        const getBookings = async () => {
            console.log("found id =" + accountID);

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
        }
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
