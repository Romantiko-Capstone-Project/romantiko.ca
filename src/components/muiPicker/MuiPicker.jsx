import React from 'react';
import { useState } from 'react';

import styles from "/styles/MuiPicker.module.css";
import "react-datepicker/dist/react-datepicker.css"

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import TextField from '@material-ui/core/TextField';

const MuiPicker = () => {
    const[date, changeDate] = useState(new Date());
    const [value, onChange] = useState(new Date());
    const [time, changeTime] = useState(new Date());

    return (
    <div className={styles.container}>
        <div className={styles.left}>
            <h3>Date and Time</h3>
            <p className={styles.desc}>Choose a date and time</p>
        
            {/* <div>
                <TimePickerComponent placeholder="Select a time"></TimePickerComponent>
            </div> */}
            <div className={styles.calendar}>
                <Calendar onChange={onChange} value={value} />
            </div>
        </div>
        <div className={styles.right}>
            <span>Pick a Time:</span>
            <div className={styles.muiPicker}>
                <TextField
                    label="Choose Time"
                    defaultValue="09:00"
                    type="time"
                    InputLabelProps={{
                    shrink: true,
                    }}
        // 5 minutes
                    inputProps={{
                    step: 300,
                    }}
                    />
            </div>
        </div>

        
        
    </div>
    );
}


export default MuiPicker;
