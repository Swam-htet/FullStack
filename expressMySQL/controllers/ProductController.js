
let productService = require("../service/productService");

// get all products
async function getAllProducts(req, res, next) {
    let result = await productService.getAllProduct();
    res.status(200).json(result);
};

// get product by id
async function getProductById(req, res, next) {
    // request id
    let id = req.params.id;
    let result = await productService.getProductByID(id);
    res.status(200).json(result);
};

// create product
async function createProduct(req, res, next) {
    let data = req.body;
    let result = await productService.createProduct(data);
    res.status(200).json(result);
};

// update product by id
async function updateProductById(req, res, next) {
    let id = req.params.id;
    let data = req.body;
    let result = await productService.updateProductById(id,data);
    res.status(200).json(result);
};

// delete product by id
async function deleteProductById(req, res, next) {
    let id = req.params.id;
    let result = await productService.deleteProductById(id);
    res.status(200).json(result);
};




module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProductById,
    deleteProductById
}