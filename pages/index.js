import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ServiceList from './component/ServiceList'
import BarberList from './component/BarberList'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import MuiPicker from './component/MuiPicker'

function Home() {
  return (
  
    
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className='App'> 
      <MuiPicker />
    </div>
      
    </LocalizationProvider>
  
    );
}

export default Home;
