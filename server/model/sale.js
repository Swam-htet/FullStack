const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const SaleSchema = new Schema({
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }
    ],
    totalAmount: {
        type: Number,
        required: true
    },
    store:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Store',
        required: true
    }
    ,
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    employee:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    }
});

module.exports = mongoose.model('Sale', SaleSchema);
