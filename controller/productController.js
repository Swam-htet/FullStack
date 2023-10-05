const productService = require("../service/ProductService");

// get all product
async function getAllProduct(req, res, next) {
    try {
        let products = await productService.getAllProduct();
        if (products) {
            res.status(200).json(products);
        } else {
            res.status(400).json({message: "Products not found"});
        }
    } catch (error) {
        res.status(400).json({message: `Products not found`});
    }

}

// get Product by id
async function getProductByID(req, res, next) {
    let id = req.params.id;
    try {
        let product = await productService.getProductByID(id);
        if (!product) {
            res.status(400).json({message: `Product ID :${id} not found`});
        } else {
            res.status(200).json(product);
        }
    } catch (error) {
        res.status(400).json({message: `Product ID :${id} not found`});
    }
}

// create product
async function createProduct(req, res, next) {
    let body = req.body;
    try{
        let product = await productService.createProduct(body);

        if (!product) {
            res.status(400).json({message: `Can't save Product`});
        } else {
            res.status(201).json(product);
        }
    }
    catch (e){
        res.status(400).json({message: `Can't save Product`,error:e});

    }

}

// update product by id
async function updateProductByID(req, res, next) {
    let id = req.params.id;
    let updateBody = req.body;
    try {
        let product = await productService.updateProductByID(id, updateBody);
        if (!product) {
            res.status(400).json({message: `Product ID :${id} not found`});
        } else {
            res.status(200).json(product);
        }
    } catch (error) {
        res.status(400).json({message: `Product ID :${id} not found`});
    }
}

// delete product by id
async function deleteProductByID(req, res, next) {
    let id = req.params.id;
    try {
        let product = await productService.deleteProductByID(id);
        if (!product) {
            res.status(400).json({message: `Product ID :${id} not found`});
        } else {
            res.status(200).json(product);
        }
    } catch (error) {
        res.status(400).json({message: `Product ID :${id} not found`});
    }
}

module.exports = {
    getAllProduct,
    getProductByID,
    createProduct,
    updateProductByID,
    deleteProductByID,
}