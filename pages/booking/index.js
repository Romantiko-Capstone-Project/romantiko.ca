import React from 'react';
import ServiceList from '../../src/components/service/ServiceList';
import BarberList from '../../src/components/barberList/BarberList';
import MuiPicker from '../../src/components/muiPicker/MuiPicker';
import ClientInformation from '../../src/components/clientInformation/ClientInformation';
import Banner from '../../src/components/banner/Banner';

const Booking = () => {
    return (
        <>
        <Banner />
        <ServiceList />
        <BarberList />
        <MuiPicker />
        <ClientInformation />
        </>
    );
}

export default Booking;
