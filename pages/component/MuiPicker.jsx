import React from 'react';
import { Stack, TextField } from '@mui/material';
import { DatePicker } from '@mui/lab';
import { useState } from 'react';

const MuiPicker = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    console.log({ selectedDate })
    return (
        <Stack spacing={4} sx={{ width: '250px'}}>
            <DatePicker 
                label='Date Picker' renderInput={(params) => <TextField{...params} />}
                value={ selectedDate}
                onChange={ (newValue) => { 
                    setSelectedDate(newValue)
                }}/>
        </Stack>
    );
}

export default MuiPicker;
