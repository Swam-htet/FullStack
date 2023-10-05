const employeeService = require("../service/EmployeeService");

// get all employee
async function getAllEmployee(req, res, next) {
    try {
        let employees = await employeeService.getAllEmployee();
        if (employees) {
            res.status(200).json(employees);
        } else {
            res.status(400).json({message: "Employee not found"});
        }
    } catch (error) {
        res.status(400).json({message: `Employee not found`});
    }

}

// get employee by employee id
async function getEmployeeByEmployeeID(req, res, next) {
    let emp_id = req.params.emp_id;
    console.log("Get employee by id : ", emp_id);
    try {
        let employee = await employeeService.getEmployeeByID(emp_id);
        if (!employee) {
            res.status(400).json({message: `Employee ID :${emp_id} not found`});
        } else {
            res.status(200).json(employee);
        }
    } catch (error) {
        res.status(400).json({message: `Employee ID :${emp_id} not found`});
    }
}

// get employee by store id
async function getEmployeeByStoreID(req, res, next) {
    let store_id = req.params.store_id;
    console.log("Store ID : ", store_id);
    try {
        let employees = await employeeService.getEmployeeByStoreID(store_id);
        if (!employees) {
            res.status(400).json({message: `Employee not found in store ID : ${store_id}`});
        } else {
            res.status(200).json(employees);
        }
    } catch (error) {
        res.status(400).json({message: `Employee not found in store ID : ${store_id}`});
    }
}

// get employee by store id and employee id
async function getEmployeeByStoreIDAndEmployeeID(req, res, next) {
    let emp_id = req.params.emp_id;
    let store_id = req.params.store_id;
    try {
        let employee = await employeeService.getEmployeeByStoreIDAndEmployeeID(store_id, emp_id);
        if (!employee) {
            res.status(400).json({message: `Employee ID :${emp_id} not found in Store ID: ${store_id}`});
        } else {
            res.status(200).json(employee);
        }
    } catch (error) {
        res.status(400).json({message: `Employee ID :${emp_id} not found in Store ID: ${store_id}`});
    }
}

// create store
async function createEmployeeByStoreID(req, res, next) {
    let body = req.body;
    let store_id = req.params['store_id'];
    try{
        let employee = await employeeService.createEmployee(body, store_id);

        if (!employee) {
            res.status(400).json({message: `Can't save employee`});
        } else {
            res.status(201).json(employee);
        }
    }
    catch (e){
        res.status(400).json({message: `Can't save employee`,error:e});

    }

}

// update employee by id
async function updateEmployeeByID(req, res, next) {
    let emp_id = req.params.emp_id;
    let updateBody = req.body;
    try {
        let employee = await employeeService.updateEmployeeByID(emp_id, updateBody);
        if (!employee) {
            res.status(400).json({message: `Employee ID :${emp_id} not found`});
        } else {
            res.status(200).json(employee);
        }
    } catch (error) {
        res.status(400).json({message: `Employee ID :${emp_id} not found`});
    }
}

// delete store by id
async function deleteEmployeeByID(req, res, next) {
    let emp_id = req.params.emp_id;
    try {
        let employee = await employeeService.deleteEmployeeByID(emp_id);
        if (!employee) {
            res.status(400).json({message: `Employee ID :${id} not found`});
        } else {
            res.status(200).json(employee);
        }
    } catch (error) {
        res.status(400).json({message: `Employee ID :${id} not found`});
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