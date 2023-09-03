// node js router import
let express = require('express');
let router = express.Router();


// controller import
let productController = require("./../controllers/ProductController");

// get all function
router.get("/", productController.getAllProducts);

// get by id
router.get("/:id", productController.getProductById);

// create
router.post("/",productController.createProduct);

// update
router.put("/:id",productController.updateProductById);

// delete
router.delete("/:id",productController.deleteProductById);

module.exports = router;