import React from 'react';
import ServiceList from '../../src/components/service/ServiceList';
import BarberList from '../../src/components/barberList/BarberList';
import MuiPicker from '../../src/components/muiPicker/MuiPicker';
import ClientInformation from '../../src/components/clientInformation/ClientInformation';

const Booking = () => {
    return (
        <>
        <ServiceList />
        <BarberList />
        <MuiPicker />
        <ClientInformation />
        </>
    );
}

export default Booking;
