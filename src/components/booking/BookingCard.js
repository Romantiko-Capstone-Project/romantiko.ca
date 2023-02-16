import React from "react";

const BookingCard = ({ startTime, endTime, selectedService }) => {
  return (
    <div>
      <h3>Booking Info</h3>
      <div>Start time: {startTime}</div>
      <div>End time: {endTime}</div>
      {selectedService && (
        <div>Service type: {selectedService.serviceName}</div>
      )}
    </div>
  );
};

export default BookingCard;
