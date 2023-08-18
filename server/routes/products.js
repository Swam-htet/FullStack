var express = require("express");
var router = express.Router();

// import product controller
var products = require("./../controller/productController");

router.get("/", products.getAllProduct);

router.get("/:id", products.getProductByID);

// router.get("/:name", products.getProductByName);

router.post("/", products.createProduct);

router.put("/:id", products.updateProductByID);

router.delete("/:id", products.deleteProductByID);

module.exports = router;

