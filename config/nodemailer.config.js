const nodemailer = require("nodemailer");

const user = process.env.USER_EMAIL;
const pass = process.env.USER_PASSWORD;

const transport = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: user,
    pass: pass,
  },
});

// Email Veirfication
const sendConfirmationEmail = (name, email, id, confirmationCode) => {
  transport
    .sendMail({
      from: user,
      to: email,
      subject: "Please confirm your account",
      html: `<h1>Email Confirmation</h1>
        <h2>Hello ${name}</h2>
        <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
        <a href=http://localhost:3000/api/account/verify/${id}/${confirmationCode}> Click here</a>
        </div>`,
    })
    .catch((err) => console.log(err));
};

// Booking Verification
const sendBookingConfirmation = (
  customerName,
  customerEmail,
  bookingId,
  bookingTime,
  barberName
) => {
  transport
    .sendMail({
      from: user,
      to: customerEmail,
      subject: "Romantiko Appointment Confirmation",
      html: `
          <h1>Your transportation booking is confirmed!</h1>
          <p>Customer Name: ${customerName}</p>
          <p>Booking ID: ${bookingId}</p>
          <p>Booking Time: ${bookingTime}</p>
          <p>Barber Name: ${barberName}</p>
          <p>Location: <Romantiko barbershop address here...></p>
        `,
    })
    .catch((err) => console.log(err));
};

module.exports = {
  sendConfirmationEmail,
  sendBookingConfirmation,
};
