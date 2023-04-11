import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
const localizer = momentLocalizer(moment);

const mapBookingsToEvents = (bookings) => {
  return bookings.map((booking) => ({
    title: booking.customerName,
    start: new Date(booking.startTime),
    end: new Date(booking.endTime),
    desc: booking.serviceName,
  }));
};

export default function CalendarView({ bookings }) {
  const events = mapBookingsToEvents(bookings);

  return (
    <div style={{ height: "600px" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        tooltipAccessor="desc"
      />
    </div>
  );
}
