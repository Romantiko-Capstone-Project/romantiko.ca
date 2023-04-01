import { useEffect, useState } from "react";
import axios from "axios";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { formatTime } from "/config/convertToHours.config";
import styles from "/styles/booking/TimeSlot.module.css";
import dayjs from "dayjs";

const TimeSlot = ({
  selectedDate,
  setSelectedDate,
  setSelectedTimeSlot,
  setSelectedStaff,
  setSelectedStaffId,
  setBookingTime,
}) => {
  const [staffs, setStaffs] = useState([]);
  const [staffsId, setStaffsId] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTimeSlotId, setSelectedTimeSlotId] = useState([]);

  // get time slots
  useEffect(() => {
    const getTimeSlotData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/week/${selectedDate.toISOString()}`
        );
        setTimeSlots(res.data);
        console.log(timeSlots)
      } catch (error) {
        console.error(error);
      }
    };

    if (selectedDate) {
      getTimeSlotData(selectedDate);
    }

    console.log(getTimeSlotData(selectedDate));
  }, [selectedDate]);

  // get staff id
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

  // return staffs
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

  // handle time slot selection
  const handleTimeSlotClick = (timeSlot) => {
    setSelectedTimeSlotId(timeSlot._id);
    setSelectedTimeSlot(timeSlot.startTime);
    const [startTime, endTime] = calculateBookingTime(
      selectedDate,
      timeSlot.startTime
    );
    setBookingTime([startTime, endTime]);
  };

  // handle staff selection
  const handleStaffSelection = (event) => {
    const selectedStaffId = event.target.value;
    const selectedStaff = staffs.find((staff) => staff._id === selectedStaffId);
    const staffName = `${selectedStaff.firstName} ${selectedStaff.lastName}`;
    setSelectedStaff(staffName);
    setSelectedStaffId(selectedStaffId);
  };

  const calculateBookingTime = (selectedDate, selectedTimeSlot) => {
    const hour = Math.floor(selectedTimeSlot);
    const minute = (selectedTimeSlot - hour) * 60;
    const startTime = dayjs(selectedDate)
      .set("hour", hour)
      .set("minute", minute)
      .format("YYYY-MM-DD HH:mm:ss");
    const endTime = dayjs(startTime)
      .add(30, "minute")
      .format("YYYY-MM-DD HH:mm:ss");
    return [startTime, endTime];
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
            disabled={timeSlot.isFull}
            className={styles.time_button}
            onClick={() => handleTimeSlotClick(timeSlot)}
          >
            {formatTime(timeSlot.startTime)}
          </button>
        ))}

        {selectedTimeSlotId && (
          <div className={styles.barber_wrapper}>
            <span>Choose a barber</span>
            {staffs.map((staff) => {
              return (
                <div className={styles.staff_container}>
                  <div className={styles.staff_radio_button}>
                    <label key={staff._id}>
                      <input
                        type="radio"
                        name="staff"
                        value={staff._id}
                        onChange={handleStaffSelection}
                      />
                    </label>
                  </div>
                  <div className={styles.staff_detail}>
                    {staff.firstName} {staff.lastName}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default TimeSlot;
