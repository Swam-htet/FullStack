let express = require("express");
let router = express.Router();

// import product controller
let products = require("./../controller/productController");

router.get("/", products.getAllProduct);

router.get("/:id", products.getProductByID);

router.post("/", products.createProduct);

router.put("/:id", products.updateProductByID);

router.delete("/:id", products.deleteProductByID);

module.exports = router;

