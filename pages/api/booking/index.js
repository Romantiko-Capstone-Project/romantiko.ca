import dbConnect from "../../../util/mongo";
import Booking from "../../../models/booking"

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ServiceList from './api/booking/ServiceList'
import BarberList from './api/booking/BarberList'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@mui/x-date-pickers/AdapterDayjs/index.js';
import "react-datepicker/dist/react-datepicker.css";
import MuiPicker from './api/booking/MuiPicker';
import ClientInformation from './api/booking/ClientInformation';

export default async function handler(req, res){
    const {method} = req;

    dbConnect()

    if(method == "GET"){

    }

    if(method == "POST"){
        try{
            
        } catch(err){
            res.status(500).json("err");
        }
    }
}
