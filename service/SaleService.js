let Sale = require("../model/sale");
let mongoose = require("mongoose");

let stockService = require('./StockService');
let productService = require('./ProductService');

let Stock = require("../model/stock");

// get all sale
async function getAllSale() {
    return Sale.find().populate(['customer', 'employee', 'store']).populate('products.product');
}

// get sale by id
async function getSaleByID(id) {
    return Sale.findById(id).populate(['customer', 'employee', 'store']).populate('products.product');
}

// create sale
async function createSale(sale) {

    // calculate stock array
    let calculateStock = [];

    // product list
    let products = sale.products;
    console.log("Products - ", products);

    // stock management
    for (let c = 0; c < products.length; c++) {
        // console.log("Product item - ", products[c]);

        // product id
        let id = products[c].product;

        // get stock list by product id
        let stockList = await stockService.getStockByProductID(id);
        // await console.log("Stock list - : ", stockList);

        // filter the stock list with quantity
        stockList = stockList.filter(item => item.quantity >= products[c].quantity);
        // await console.log("Stock list with quantity available - ", stockList);

        // sort with exp date order
        stockList.sort((a, b) => a.exp_date - b.exp_date);

        // filter the earliest expire date
        const chooseItem = stockList.filter(item => item.exp_date === stockList[0].exp_date);
        // await console.log("Choose item -", chooseItem);
        calculateStock.push(chooseItem[0]);

    }

    // calculating the stock
    // await console.log("Calculate stock - ", calculateStock);

    for (const stock of calculateStock) {
        const index = calculateStock.indexOf(stock);
        // console.log("Stock Item - ", stock);
        let remainQuantity = stock.quantity - products[index].quantity;
        // console.log("Remain Quantity ", remainQuantity);
        await console.log("Stock item - ", stock);
        let newStock = {
            ...stock._doc,
            quantity: remainQuantity,
        };
        // await console.log("New Stock - ", newStock);
        await stockService.updateStockByID(stock._id, newStock);
    }


    // calculating the total amount
    let totalAmount = products.reduce((acc, item) => {
        let price = item.price;
        let quantity = item.quantity;
        return (acc + (price * quantity));
    }, 0);

    // console.log("Total Amount - ", totalAmount);

    let newSale = new Sale({
        ...sale,
        totalAmount,
    });

    await newSale.save();
    await newSale.populate(['customer', 'employee', 'store']);
    // return
    return newSale.populate('products.product');


}



module.exports = {
    getAllSale,
    getSaleByID,
    createSale,
}