var express = require("express");
var router = express.Router();

var employees = require("./../controller/employeeController");

// get all employee
router.get("/",employees.getAllEmployee);

// get employee by id
router.get("/:emp_id",employees.getEmployeeByEmployeeID);

// update employee by id
router.put("/:emp_id", employees.updateEmployeeByID);

// delete employee by id
router.delete("/:emp_id",employees.deleteEmployeeByID);

module.exports = router;
