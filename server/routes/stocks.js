var express = require("express");
var router = express.Router();

// import manufacturer controller
var stocks = require("./../controller/stockController");

router.get("/", stocks.getAllStock);

router.get("/:id", stocks.getStockByID);

// router.get("/product/:id", stocks.getStockByProductID);

router.post("/", stocks.createStock);

router.put("/:id", stocks.updateStockByID);

router.delete("/:id", stocks.deleteStoreByID);

module.exports = router;
