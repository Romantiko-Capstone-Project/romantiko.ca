import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';


const MuiPicker = () => {
    const[date, setDate] = useState(new Date());
    return (
        <div>
            <DatePicker selected={date} onChange={date => setDate(date)} />
        </div>
    );
}

export default MuiPicker;
