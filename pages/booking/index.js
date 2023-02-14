import Banner from "../../src/components/banner/Banner";
import ServiceList from "../../src/components/service/ServiceList";
import TimeSlotTable from "../../src/components/schedule/TimeSlotTable";

const Booking = () => {
  return (
    <>
      <Banner />
      <ServiceList />
      <TimeSlotTable />
      {/* 
        <BarberList />
        <MuiPicker />
        <ClientInformation /> */}
    </>
  );
};

export default Booking;
