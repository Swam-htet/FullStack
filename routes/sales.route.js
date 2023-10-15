var express = require("express");
var router = express.Router();

// import manufacturer controller
var salesRoute = require("../controller/sale.controller");

router.get("/", salesRoute.getAllSale);

router.get("/:id", salesRoute.getSaleByID);

router.post("/", salesRoute.createSale);

module.exports = router;
