import { useEffect, useState } from "react";
import axios from "axios";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import styles from "/styles/booking/TimeSlot.module.css";

const TimeSlot = ({ selectedDate, setSelectedDate, timeSlots }) => {
  const [staffs, setStaffs] = useState([]);
  const [staffsId, setStaffsId] = useState([]);
  const [selectedTimeSlotId, setSelectedTimeSlotId] = useState(null);
  const [selectedStaffId, setSelectedStaffId] = useState(null);

  useEffect(() => {
    const getStaffIds = async (timeSlotId) => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/timeslot/${timeSlotId}`
        );
        setStaffsId(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (selectedTimeSlotId) {
      getStaffIds(selectedTimeSlotId);
    }
  }, [selectedTimeSlotId]);

  useEffect(() => {
    const getStaff = async (id) => {
      try {
        const res = await axios.get(`http://localhost:3000/api/staff/${id}`);
        return res.data;
      } catch (err) {
        console.error(err);
      }
    };

    Promise.all(staffsId.map((staffId) => getStaff(staffId)))
      .then((staffArray) => {
        setStaffs(staffArray);
      })
      .catch((err) => console.error(err));
  }, [staffsId]);

  const handleTimeSlotClick = (timeSlotId) => {
    console.log(timeSlotId);
    setSelectedTimeSlotId(timeSlotId);
  };

  const selectedTimeSlot = timeSlots.find(
    (timeSlot) => timeSlot.id === selectedTimeSlotId
  );

  const handleStaffSelection = (event) => {
    setSelectedStaffId(event.target.value);
  };

  return (
    <>
      <div className={styles.date_wrapper}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            orientation="landscape"
            className={styles.date_picker}
            onChange={(newDate) => setSelectedDate(newDate.$d)}
          />
        </LocalizationProvider>
      </div>

      <div className={styles.time_wrapper}>
        <h4>Availability</h4>
        {timeSlots.map((timeSlot) => (
          <button
            key={timeSlot._id}
            className={styles.time_button}
            onClick={() => handleTimeSlotClick(timeSlot._id)}
          >
            {timeSlot.startTime}
          </button>
        ))}

        {selectedTimeSlotId && (
          <div className={styles.barber}>
            <span>Choose a barber</span>
            {staffs.map((staff) => {
              return (
                <label key={staff._id} className={styles.staff_label}>
                  {" "}
                  <input
                    type="radio"
                    name="staff"
                    value={staff._id}
                    checked={selectedStaffId === staff._id}
                    onChange={handleStaffSelection}
                    className={styles.staff_radio}
                  />
                  {/* Display the staff's name */}
                  {staff.firstName} {staff.lastName}
                </label>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default TimeSlot;
