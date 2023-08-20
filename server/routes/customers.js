let express = require("express");
let router = express.Router();

// import customer controller
let customers = require("./../controller/customerController");

router.get("/", customers.getAllCustomer);

router.get("/:id", customers.getCustomerByID);

router.post("/", customers.createCustomer);

router.put("/:id", customers.updateCustomerByID);

router.delete("/:id", customers.deleteCustomerByID);

module.exports = router;
