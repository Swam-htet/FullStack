const employeeService = require("../service/Employee.service");
const responseFormatter = require("../utils/responseFormatter");

async function getAllEmployee(req, res, next) {
    try {
        let employees = await employeeService.getAllEmployee();
        if (employees) {
            res.status(200).json(responseFormatter(true, employees, "Get all employee success"));
        } else {
            res.status(400).json(responseFormatter(false, [], "Employee not found"));
        }
    } catch (error) {
        res.status(400).json(responseFormatter(false, null, "Employee not found"));
    }

}

async function getEmployeeByEmployeeID(req, res, next) {
    let emp_id = req.params.emp_id;
    try {
        let employee = await employeeService.getEmployeeByID(emp_id);
        if (employee) {
            res.status(200).json(responseFormatter(true, employee, `Get employee by ID : ${emp_id} success`));
        } else {
            res.status(400).json(responseFormatter(false, null, `Employee ID :${emp_id} not found`));
        }
    } catch (error) {
        res.status(400).json(responseFormatter(false, null, error.message));
    }
}

async function getEmployeeByStoreID(req, res, next) {
    let store_id = req.params.store_id;
    try {
        let employees = await employeeService.getEmployeeByStoreID(store_id);
        if (employees) {
            res.status(200).json(responseFormatter(true, employees, `Get employees by store ID : ${store_id} success`));
        } else {
            res.status(400).json(responseFormatter(false, [], `Employee not found in store ID : ${store_id}`));
        }
    } catch (error) {
        res.status(400).json(responseFormatter(false, null, error.message));
    }
}

async function getEmployeeByStoreIDAndEmployeeID(req, res, next) {
    let emp_id = req.params.emp_id;
    let store_id = req.params.store_id;
    try {
        let employee = await employeeService.getEmployeeByStoreIDAndEmployeeID(store_id, emp_id);
        if (employee) {
            res.status(200).json(responseFormatter(true, ...employee, `Get employee by ID : ${emp_id} and store ID : ${store_id} success`));
        } else {
            res.status(400).json(responseFormatter(false, null, `Employee ID :${emp_id} not found in Store ID: ${store_id}`));
        }
    } catch (error) {
        res.status(400).json(responseFormatter(false, null, error.message));
    }
}

async function createEmployeeByStoreID(req, res, next) {
    let body = req.body;
    let store_id = req.params['store_id'];
    try{
        let employee = await employeeService.createEmployee(body, store_id);

        if (employee) {
            res.status(201).json(responseFormatter(true, employee, `Create employee success`));
        } else {
            res.status(400).json(responseFormatter(false, null, `Can't save employee`));
        }
    }
    catch (e){
        res.status(400).json(responseFormatter(false, null, e.message));

    }

}

async function updateEmployeeByID(req, res, next) {
    let emp_id = req.params.emp_id;
    let updateBody = req.body;
    try {
        let employee = await employeeService.updateEmployeeByID(emp_id, updateBody);
        if (employee) {
            res.status(200).json(responseFormatter(true, employee, `Update employee ID : ${emp_id} success`));
        } else {
            res.status(400).json(responseFormatter(false, null, `Employee ID :${emp_id} not found`));
        }
    } catch (error) {
        res.status(400).json(responseFormatter(false, null, error.message));
    }
}

async function deleteEmployeeByID(req, res, next) {
    let emp_id = req.params.emp_id;
    try {
        let employee = await employeeService.deleteEmployeeByID(emp_id);
        if (employee) {
            res.status(200).json(responseFormatter(true, employee, `Delete employee ID : ${emp_id} success`));
        } else {
            res.status(400).json(responseFormatter(false, null, `Employee ID :${emp_id} not found`));
        }
    } catch (error) {
        res.status(400).json(responseFormatter(false, null, error.message));
    }
}

module.exports = {
    getAllEmployee,
    getEmployeeByEmployeeID,
    getEmployeeByStoreID,
    getEmployeeByStoreIDAndEmployeeID,
    createEmployeeByStoreID,
    updateEmployeeByID,
    deleteEmployeeByID,
}