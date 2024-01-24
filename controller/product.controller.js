const productService = require("../service/Product.service");
const responseFormatter = require("../utils/responseFormatter");


async function getAllProduct(req, res, next) {
    try {
        let products = await productService.getAllProduct();
        if (products) {
            res.status(200).json(responseFormatter(true, products, "Get all products successfully"));
        } else {
            res.status(400).json(responseFormatter(false, [], "Can't get all products"));
        }
    } catch (error) {
        res.status(400).json(responseFormatter(false, null, error.message));
    }

}

async function getProductByID(req, res, next) {
    let id = req.params.id;
    try {
        let product = await productService.getProductByID(id);
        if (product) {
            res.status(200).json(responseFormatter(true, product, `Get product ID :${id} successfully`));
        } else {
            res.status(400).json(responseFormatter(false, null, `Product ID :${id} not found`));

        }
    } catch (error) {
        res.status(400).json(responseFormatter(false, null, error.message));
    }
}

async function createProduct(req, res, next) {
    let body = req.body;
    try{
        let product = await productService.createProduct(body);
        if (product) {
            res.status(201).json((responseFormatter(true, product, `Save product successfully`)));
        } else {
            res.status(400).json(responseFormatter(false, null, `Can't save product`));
        }
    }
    catch (e){
        res.status(400).json(responseFormatter(false, null, e.message));
    }
}

async function updateProductByID(req, res, next) {
    let id = req.params.id;
    let updateBody = req.body;
    try {
        let product = await productService.updateProductByID(id, updateBody);
        if (product) {
            res.status(200).json(responseFormatter(true, product, `Update product ID :${id} successfully`));
        } else {
            res.status(400).json(responseFormatter(false, null, `Product ID :${id} not found`));
        }
    } catch (error) {
        res.status(400).json(responseFormatter(false, null, error.message));
    }
}

async function deleteProductByID(req, res, next) {
    let id = req.params.id;
    try {
        let product = await productService.deleteProductByID(id);
        if (product) {
            res.status(200).json(responseFormatter(true, product, `Delete product ID :${id} successfully`));
        } else {
            res.status(400).json(responseFormatter(false, null, `Product ID :${id} not found`));
        }
    } catch (error) {
        res.status(400).json(responseFormatter(false, null, error.message));
    }
}

module.exports = {
    getAllProduct,
    getProductByID,
    createProduct,
    updateProductByID,
    deleteProductByID,
}