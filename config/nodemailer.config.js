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

const sendConfirmationEmail = (name, email, id, confirmationCode) => {
  transport
    .sendMail({
      from: user,
      to: email,
      subject: "Please confirm your account",
      html: `<h1>Email Confirmation</h1>
        <h2>Hello ${name}</h2>
        <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
        <a href=http://localhost:3000/api/users/verify/${id}/${confirmationCode}> Click here</a>
        </div>`,
    })
    .catch((err) => console.log(err));
};

module.exports = {
  sendConfirmationEmail,
};