const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    street: String,
    city: String,
    state: String,
    postalCode: String,
});

const EmployeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    NRC: {
        type: String,
        unique: true,
        required: true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true,
    },
    address: AddressSchema,
    phoneNumber: {
        type: String,
        required: true,
    },
    workStartDate: {
        type: Date,
        required: true,
    },
    birthDate: {
        type: Date,
        required: true,
    },
    store: {
        type: Schema.Types.ObjectId,
        ref: "Store",
    }
});

module.exports = mongoose.model("Employee",EmployeeSchema);