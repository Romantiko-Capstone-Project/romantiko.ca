import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import styles from "/styles/TimeSlotTable.module.css";

const TimeSlotTable = () => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [date, setDate] = useState(moment().startOf("week"));
  const [timeSlotsData, setTimeSlotsData] = useState([]);
  const [time, setTime] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/api/timeslot/");
      setTimeSlotsData(response.data);
    };

    fetchData();
  }, []);

  const handleClick = (timeSlot) => {
    setTime(timeSlot.startTime);
    // Book the time slot
  };

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            {daysOfWeek.map((day) => {
              return <th key={day}>{day}</th>;
            })}
          </tr>
          <tr>
            <th></th>
            {daysOfWeek.map((day) => {
              const currentDate = date.clone().day(day);
              return (
                <th key={currentDate.format("dddd")}>
                  {currentDate.format("MM/DD/YYYY")}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {timeSlotsData.map((timeSlot) => {
            return (
              <tr key={`${timeSlot.day}-${timeSlot.startTime}`}>
                {daysOfWeek.map((day) => {
                  const currentDate = date.clone().day(day);

                  if (day === timeSlot.day) {
                    return (
                      <td
                        key={`${currentDate.format("MM/DD/YYYY")}-${
                          timeSlot.startTime
                        }`}
                      >
                        <button
                          disabled={timeSlot.isBooked}
                          onClick={() => handleClick(timeSlot)}
                        >
                          {timeSlot.startTime}
                        </button>
                      </td>
                    );
                  } else {
                    return <td key={`${day}-${timeSlot.startTime}`}></td>;
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={() => setDate(date.clone().subtract(7, "days"))}>
        Previous Week
      </button>

      <button onClick={() => setDate(date.clone().add(7, "days"))}>
        Next Week
      </button>
    </div>
  );
};

export default TimeSlotTable;
