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

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/api/timeslot/");
      setTimeSlotsData(response.data);
    };

    fetchData();
  }, []);

  const getTimeSlotsForDay = (day) => {
    return timeSlotsData.filter((timeSlot) => timeSlot.day === day);
  };

  const allStartTimes = timeSlotsData.flatMap((timeSlot) => timeSlot.startTime);

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            {daysOfWeek.map((day) => {
              return <th key={day}>{day}</th>;
            })}
          </tr>
          <tr>
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
          {allStartTimes.map((time) => (
            <tr key={time}>
              {daysOfWeek.map((day) => {
                const timeSlotsForDay = getTimeSlotsForDay(day);
                const timeSlot = timeSlotsForDay.find(
                  (timeSlot) => timeSlot.startTime === time
                );

                if (timeSlot) {
                  return (
                    <td key={`${day}-${time}`}>
                      <button
                        disabled={timeSlot.isBooked}
                        onClick={() => {
                          // Book the time slot
                        }}
                      >
                        {timeSlot.startTime}
                      </button>
                    </td>
                  );
                } else {
                  return <td key={`${day}-${time}`}></td>;
                }
              })}
            </tr>
          ))}
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
