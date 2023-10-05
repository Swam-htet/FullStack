var express = require("express");
var router = express.Router();

// import manufacturer controller
var sales = require("./../controller/saleController");

router.get("/", sales.getAllSale);

router.get("/:id", sales.getSaleByID);

router.post("/", sales.createSale);

module.exports = router;
