let express = require("express");
let router = express.Router();

// import customer controller
let customersRoute = require("../controller/customer.controller");

router.get("/", customersRoute.getAllCustomer);

router.get("/:id", customersRoute.getCustomerByID);

router.post("/", customersRoute.createCustomer);

router.put("/:id", customersRoute.updateCustomerByID);

router.delete("/:id", customersRoute.deleteCustomerByID);

module.exports = router;
