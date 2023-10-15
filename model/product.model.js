let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price:{
        type:Number,
        required: true,
    },
    category:{
        type:mongoose.Types.ObjectId,
        ref:"Category"
    },
    manufacturer:{
        type:mongoose.Types.ObjectId,
        ref:"Manufacturer"
    }
})

module.exports = mongoose.model("Product",ProductSchema);