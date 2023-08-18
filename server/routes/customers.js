var express = require("express");
var router = express.Router();

// import customer controller
var customers = require("./../controller/customerController");

router.get("/", customers.getAllCustomer);

router.get("/:id", customers.getCustomerByID);

router.get("/:name", customers.getCustomerByName);

router.post("/", customers.createCustomer);

router.put("/:id", customers.updateCustomerByID);

router.delete("/:id", customers.deleteCustomerByID);

module.exports = router;
