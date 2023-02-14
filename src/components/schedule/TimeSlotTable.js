import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import styles from "/styles/TimeSlotTable.module.css"

const TimeSlotTable = () => {
  const startTime = 9;
  const endTime = 17;
  const timeSlots = [];

  for (let i = startTime; i <= endTime; i++) {
    timeSlots.push(i);
  }

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [date, setDate] = useState(moment().startOf('week'));
  const [timeSlotsData, setTimeSlotsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3000/api/timeslot/');
      setTimeSlotsData(response.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            {daysOfWeek.map(day => {
              return (
                <th key={day}>{day}</th>
              );
            })}
          </tr>
          <tr>
            <th></th>
            {daysOfWeek.map(day => {
              const currentDate = date.clone().day(day);
              return (
                <th key={currentDate.format('dddd')}>
                  {currentDate.format('MM/DD/YYYY')}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
        
          {timeSlots.map(time => (
            <tr key={time}>
              {/* <td>{time}:00</td> */}
              {daysOfWeek.map(day => {
                const currentDate = date.clone().day(day);
                const currentTimeSlot = timeSlotsData.find(
                  timeSlot => timeSlot.day === day && timeSlot.startTime === time
                );
                return (
                  <td key={`${currentDate.format('MM/DD/YYYY')}-${time}`}>
                    <button 
                      disabled={currentTimeSlot && currentTimeSlot.isBooked}
                      onClick={() => {
                        // Book the time slot
                      }}
                    >
                      {time}:00
                    </button>
                  </td>
                );
              })}
            </tr>
          ))}

        </tbody>
      </table>
      <button onClick={() => setDate(date.clone().subtract(7, 'days'))}>Previous Week</button>
      <button onClick={() => setDate(date.clone().add(7, 'days'))}>Next Week</button>
    </div>
  );
};

export default TimeSlotTable;
