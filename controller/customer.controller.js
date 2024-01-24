const customerService = require("../service/Customer.service");
const responseFormatter = require("../utils/responseFormatter");


async function getAllCustomer(req, res, next) {
  try {
    let customers = await customerService.getAllCustomer();
    if (customers) {
      res.status(200).json(responseFormatter(true, customers, "Get all customers successfully"));
    } else {
      res.status(400).json(responseFormatter(false, [], "Can't get all customers"));
    }
  } catch (error) {
    res.status(400).json(responseFormatter(false, null, error.message));
  }
}

async function getCustomerByID(req, res, next) {
  let id = req.params.id;

  try {
    let customer = await customerService.getCustomerByID(id);
    if (customer) {
      res.status(200).json(responseFormatter(true, customer, `Get customer ID :${id} successfully`));
    } else {
      res.status(400).json(responseFormatter(false, null, `Customer ID :${id} not found`));
    }
  } catch (error) {
    res.status(400).json(responseFormatter(false, null, error.message));
  }
}

async function createCustomer(req, res, next) {
  let body = req.body;
  try {
    let customer = await customerService.createCustomer(body);
    if (customer) {
      res.status(201).json(responseFormatter(true, customer, `Save customer successfully`));
    } else {
      res.status(400).json(responseFormatter(false, null, `Can't save customer`));
    }
  } catch (error) {
    res.status(400).json(responseFormatter(false, null, error.message));
  }
}

async function updateCustomerByID(req, res, next) {
  let id = req.params["id"];
  let updateBody = req.body;
  try {
    let customer = await customerService.updateCustomer(id, updateBody);
    if (customer) {
      res.status(200).json(responseFormatter(true, customer, `Update customer ID :${id} successfully`));
    } else {
      res.status(400).json(responseFormatter(false, null, `Customer ID :${id} not found`));
    }
  } catch (error) {
    res.status(400).json(responseFormatter(false, null, error.message));
  }
}

async function deleteCustomerByID(req, res, next) {
  let id = req.params["id"];
  try {
    let customer = await customerService.deleteCustomer(id);
    if (customer) {
      res.status(200).json(responseFormatter(true, customer, `Delete customer ID :${id} successfully`));
    } else {
      res.status(400).json(responseFormatter(false, null, `Customer ID :${id} not found`));
    }
  } catch (error) {
    res.status(400).json(responseFormatter(false, null, error.message));
  }
}

module.exports = {
  getAllCustomer,
  getCustomerByID,
  createCustomer,
  updateCustomerByID,
  deleteCustomerByID,
};
