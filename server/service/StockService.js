let Stock = require("../model/stock");
let mongoose = require("mongoose");

// get all stock
async function getAllStock() {
    let stock = await Stock.find().populate({
        path : "product",
        populate:[
            {
                path : "manufacturer"
            },
            {
                path :"category"
            }
        ]
    });
    return stock;

}

// get stock by id
async function getStockByID(id) {
    let stock = await Stock.findById(id);
    await stock.populate({
        path : "product",
        populate:[
            {
                path : "manufacturer"
            },
            {
                path :"category"
            }
        ]
    });
    return stock;
}

// get stock by product id
async function getStockByProductID(id) {
    let stock = await Stock.find({product:id});
    return stock;
}

// create stock
async function createStock(stock) {
    let newStock = new Stock({
        quantity: stock.quantity,
        product: mongoose.Types.ObjectId(stock.product_id),
        manufacture_date: new Date(stock.manufacture_date),
        exp_date: new Date(stock.exp_date),
    });
    await newStock.save();
    await newStock.populate({
        path : "product",
        populate:[
            {
                path : "manufacturer"
            },
            {
                path :"category"
            }
        ]
    });
    return newStock;
}

// update stock
async function updateStockByID(id, body) {
    let stock = await Stock.findByIdAndUpdate(id, body, {new: true}).populate({
        path : "product",
        populate:[
            {
                path : "manufacturer"
            },
            {
                path :"category"
            }
        ]
    });
    return stock;
}

// delete stock
async function deleteStockByID(id) {
    let stock = await Stock.findByIdAndDelete(id).populate({
        path : "product",
        populate:[
            {
                path : "manufacturer"
            },
            {
                path :"category"
            }
        ]
    });
    return stock;
}

module.exports = {
    getAllStock,
    getStockByID,
    getStockByProductID,
    createStock,
    updateStockByID,
    deleteStockByID
}