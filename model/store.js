const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    street: String,
    city: String,
    state: String,
    postalCode: String,
});

const StoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: AddressSchema,
    phoneNumber: String,
});

module.exports = mongoose.model("Store",StoreSchema);