let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let StockSchema = new Schema({
    quantity: {
        type: Number,
        required: true,
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    manufacture_date: {
        type: Date,
        required: true
    },
    exp_date: {
        type: Date,
        required: true

    }
})

module.exports = mongoose.model("Stock", StockSchema);