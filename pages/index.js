import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ServiceList from './component/ServiceList'
import BarberList from './component/BarberList'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@mui/x-date-pickers/AdapterDayjs/index.js';
import "react-datepicker/dist/react-datepicker.css";
import MuiPicker from './component/MuiPicker'

export default function Home() {
  
  return (
    <>
    <MuiPicker />
    </>
  );
}


