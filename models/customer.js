const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    account: {
        type: Schema.Types.ObjectId,
        ref: 'Account',
        required: true
    }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
