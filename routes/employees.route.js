var express = require("express");
var router = express.Router();

var employeesRoute = require("../controller/employee.controller");

// get all employee
router.get("/",employeesRoute.getAllEmployee);

// get employee by id
router.get("/:emp_id",employeesRoute.getEmployeeByEmployeeID);

// update employee by id
router.put("/:emp_id", employeesRoute.updateEmployeeByID);

// delete employee by id
router.delete("/:emp_id",employeesRoute.deleteEmployeeByID);

module.exports = router;
