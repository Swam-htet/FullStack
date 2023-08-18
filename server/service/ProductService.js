let Product = require("../model/product");
let mongoose = require("mongoose");

// get all product
async function getAllProduct() {
    let product = await Product.find().populate('category').populate("manufacturer");
    return product;

}

// get product by id
async function getProductByID(id) {
    let product = await Product.findById(id);
    await product.populate('category');
    await product.populate('manufacturer');
    return product;
}

// get product by name
async function getProductByName(name) {
    let product = await Product.find({"name": name});
    return product;
}

// create product
async function createProduct(product) {
    let newProduct = new Product({
        name: product.name,
        price: product.price,
        category: mongoose.Types.ObjectId(product.category_id),
        manufacturer: mongoose.Types.ObjectId(product.manufacturer_id),
    });
    await newProduct.save();
    await newProduct.populate('category');
    await newProduct.populate('manufacturer');
    return newProduct;
}

// update product
async function updateProductByID(id, body) {
    let product = await Product.findByIdAndUpdate(id, body, {new: true}).populate("manufacturer").populate('category');
    return product;
}

// delete product
async function deleteProductByID(id) {
    let product = await Product.findByIdAndDelete(id).populate("manufacturer").populate("category");
    return product;
}

module.exports = {
    getAllProduct,
    getProductByID,
    getProductByName,
    createProduct,
    updateProductByID,
    deleteProductByID
}