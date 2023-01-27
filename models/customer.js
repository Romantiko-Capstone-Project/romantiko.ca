import { Schema as _Schema, model } from 'mongoose';

const customerSchema = new _Schema({
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
        type: _Schema.Types.ObjectId,
        ref: 'Account',
        required: true
    },
    booking: {
        type: _Schema.Types.ObjectId,
        ref: 'Booking'
    }
});

const Customer = model('Customer', customerSchema);
export default Customer;
