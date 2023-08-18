let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const AddressSchema = new Schema({
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String
});

const CustomerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: AddressSchema,
    phoneNumber: String,
    email: String
});


module.exports = mongoose.model("Customer",CustomerSchema);