import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { format } from "date-fns";
import styles from "/styles/booking/TimeSlot.module.css";

const TimeSlot = ({
  setSelectedDate,
  timeSlots,
  setSelectedStartTime,
  handleGetTime,
}) => {
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
        <div className={styles.timeSlot}>
          {timeSlots.map((slot) => (
            <button
              className={styles.time_button}
              key={slot.startTime}
              disabled={slot.isBooked}
              onClick={() => {
                setSelectedStartTime(slot.startTime);
                handleGetTime(slot.startTime);
              }}
            >
              {format(
                new Date().setHours(
                  Math.floor(slot.startTime / 100),
                  slot.startTime % 100
                ),
                "h:mma"
              )}
            </button>
          ))}
        </div>

        <div className={styles.barber}>
          <span>Choose a barber</span>
        </div>
      </div>
    </>
  );
};

export default TimeSlot;
