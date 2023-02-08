import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';

import format from 'date-fns/format'
import styles from "/styles/BarberList.module.css";
import "react-datepicker/dist/react-datepicker.css"
import {TimePickerComponent} from "@syncfusion/ej2-react-calendars";

const MuiPicker = () => {
    const[startDate, setStartDate] = useState(new Date());
    
    return (
    <div className={styles.container}>
        <h3>Date and Time</h3>
        <p className={styles.desc}>Choose a date and time</p>
        <div className={styles.muiPicker}>
        <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
        />
        </div>
        <div>
            <TimePickerComponent placeholder="Select a time"></TimePickerComponent>
        </div>
    </div>
    );
}

export default MuiPicker;
