let Employee = require("../model/employee");
let mongoose = require("mongoose");

// get all Employee
async function getAllEmployee() {
    return Employee.find().populate("store");
}

// get employee by id
async function getEmployeeByID(id) {
    return Employee.findById(id).populate('store');
}

// get employee by store_id
async function getEmployeeByStoreID(store_id) {
    return Employee.find({store: store_id}).populate('store');
}

// get employee by store_id and employee_id
async function getEmployeeByStoreIDAndEmployeeID(store_id, employee_id) {
    return Employee.find({_id: employee_id,store:store_id});
}

// create employee with store_id
async function createEmployee(employee, store_id) {
    let newEmployee = await new Employee({...employee, store: mongoose.Types.ObjectId(store_id)});
    await newEmployee.save();
    return newEmployee.populate('store');
}

// update employee
async function updateEmployeeByID(id, body) {
    let employee = await Employee.findByIdAndUpdate(id, body, {new: true});
    return employee.populate("store");
}

// delete employee
async function deleteEmployeeByID(id) {
    return Employee.findByIdAndDelete(id).populate("store");
}

module.exports = {
    getAllEmployee,
    getEmployeeByID,
    getEmployeeByStoreID,
    getEmployeeByStoreIDAndEmployeeID,
    createEmployee,
    updateEmployeeByID,
    deleteEmployeeByID
}