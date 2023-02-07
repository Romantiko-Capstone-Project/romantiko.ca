import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ServiceList from './component/ServiceList'
import BarberList from './component/BarberList'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@mui/x-date-pickers/AdapterDayjs/index.js';


import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function Home() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        showTimeSelect
        dateFormat="MMMM d, yyyy h:mmaa"
        selected={startDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        onChange={date => setStartDate(date)}
/>
</LocalizationProvider>
  );
}


