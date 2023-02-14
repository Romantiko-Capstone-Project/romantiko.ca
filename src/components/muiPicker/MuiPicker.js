import React, { useState, useEffect } from "react";
import styles from "/styles/MuiPicker.module.css";
import ReactTimeslotCalendar from "react-timeslot-calendar";
import moment from "moment";
import axios from "axios";

const MuiPicker = () => {
  const [slots, setSlots] = useState([]);

  // useEffect(() => {
  //   const getSlots = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:3000/api/timeslot/");
  //       setSlots(res.data);
  //     } catch (err) {}
  //   };
  //   getSlots();
  // }, []);


  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <ReactTimeslotCalendar
          initialDate={moment().format("YYYY-MM-DD")}
          let
          timeslots={[]}
        />
      </div>
    </div>
  );
};

export default MuiPicker;
