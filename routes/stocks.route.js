let express = require("express");
let router = express.Router();

// import manufacturer controller
let stocksRoute = require("../controller/stock.controller");

router.get("/", stocksRoute.getAllStock);

router.get("/:id", stocksRoute.getStockByID);

// router.get("/product/:id", stocksRoute.getStockByProductID);

router.post("/", stocksRoute.createStock);

router.put("/:id", stocksRoute.updateStockByID);

router.delete("/:id", stocksRoute.deleteStoreByID);

module.exports = router;
