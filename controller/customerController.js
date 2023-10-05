const customerService = require("../service/CustomerSevice");

// get all customers
async function getAllCustomer(req, res, next) {
  try {
    let customers = await customerService.getAllCustomer();
    if (customers) {
      res.status(200).json(customers);
    } else {
      res.status(400).json({ message: "Customer not found" });
    }
  } catch (error) {
    res.status(400).json({ message: `Customer not found` });
  }
}

// get customer by id
async function getCustomerByID(req, res, next) {
  let id = req.params.id;

  try {
    let customer = await customerService.getCustomerByID(id);
    if (!customer) {
      res.status(400).json({ message: `Customer ID :${id} not found` });
    } else {
      res.status(200).json(customer);
    }
  } catch (error) {
    res.status(400).json({ message: `Customer ID :${id} not found` });
  }
}

// create customer
async function createCustomer(req, res, next) {
  let body = req.body;
  try {
    let customer = await customerService.createCustomer(body);
    if (!customer) {
      res.status(400).json({ message: `Can't save customer` });
    } else {
      res.status(201).json(customer);
    }
  } catch (error) {
    res.status(400).json({ message: `Can't save customer` });
  }
}

// update customer by id
async function updateCustomerByID(req, res, next) {
  let id = req.params["id"];
  let updateBody = req.body;
  try {
    let customer = await customerService.updateCustomer(id, updateBody);
    if (!customer) {
      res.status(400).json({ message: `Customer ID :${id} not found` });
    } else {
      res.status(200).json(customer);
    }
  } catch (error) {
    res.status(400).json({ message: `Customer ID :${id} not found` });
  }
}

// delete customer by id
async function deleteCustomerByID(req, res, next) {
  let id = req.params["id"];
  try {
    let customer = await customerService.deleteCustomer(id);
    if (!customer) {
      res.status(400).json({ message: `Customer ID :${id} not found` });
    } else {
      res.status(200).json(customer);
    }
  } catch (error) {
    res.status(400).json({ message: `Customer ID :${id} not found` });
  }
}

module.exports = {
  getAllCustomer,
  getCustomerByID,
  createCustomer,
  updateCustomerByID,
  deleteCustomerByID,
};
