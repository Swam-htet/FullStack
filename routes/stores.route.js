var express = require("express");
var router = express.Router();

// import store controller
let storesRoute = require("../controller/store.controller");

// import employee controller
let employees = require("../controller/employee.controller");

// get all storesRoute
router.get("/", storesRoute.getAllStore);

// get store by id
router.get("/:id", storesRoute.getStoreByID);

// create store
router.post("/", storesRoute.createStore);

// update store by id
router.put("/:id", storesRoute.updateStoreByID);

// delete store by id
router.delete("/:id", storesRoute.deleteStoreByID);

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
