import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';

import format from 'date-fns/format'
import styles from "/styles/BarberList.module.css";


const MuiPicker = () => {
    const[startDate, setStartDate] = useState(new Date());
    return (
    <div className={styles.container}>
        <h3 className={styles.title}>Choose a Date</h3>
        <div className={styles.muiPicker}>
        <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
        />
        </div>
    </div>
    );
}

export default MuiPicker;
