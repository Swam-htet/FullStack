let express = require("express");
let router = express.Router();

// import product controller
let productsRoute = require("../controller/product.controller");

router.get("/", productsRoute.getAllProduct);

router.get("/:id", productsRoute.getProductByID);

router.post("/", productsRoute.createProduct);

router.put("/:id", productsRoute.updateProductByID);

router.delete("/:id", productsRoute.deleteProductByID);

module.exports = router;

