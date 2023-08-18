var express = require("express");
var router = express.Router();

// import store controller
var stores = require("./../controller/storeController");

// import employee controller
var employees = require("./../controller/employeeController");

// get all stores
router.get("/", stores.getAllStore);

// get store by id
router.get("/:id", stores.getStoreByID);

// get store by name
router.get("/:name", stores.getStoreByName);

// create store
router.post("/", stores.createStore);

// update store by id
router.put("/:id", stores.updateStoreByID);

// delete store by id
router.delete("/:id", stores.deleteStoreByID);

// get employee by store id
router.get("/:store_id/employees",employees.getEmployeeByStoreID);

// create employee by store id
router.post("/:store_id/employees",employees.createEmployeeByStoreID);

// get employee by store id and employee id
router.get("/:store_id/employees/:emp_id",employees.getEmployeeByStoreIDAndEmployeeID);

// // get employee by store id and employee name
// router.get("/:store_id/employees/name/:emp_name",employees.getEmployeeByStoreIDAndEmployeeName);
//

module.exports = router;
