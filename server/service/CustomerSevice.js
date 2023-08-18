let Customer = require("../model/customer");

// get all customer
async function getAllCustomer() {
    return Customer.find();
}

// get category by id
async function getCustomerByID(id) {
    let customer = await Customer.findById(id);
    return customer;
}

// get category by name
async function getCustomerByName(name) {
    let customer = await Customer.find({"name": name});
    return customer;
}

// create category
async function createCustomer(customer) {
    let newCustomer = new Customer(customer);
    return newCustomer.save();
}

// update category
async function updateCustomer(id, body) {
    let customer = await Customer.findByIdAndUpdate(id, body, {new: true});
    return customer;
}

// delete category
async function deleteCustomer(id) {
    let customer = await Customer.findByIdAndDelete(id);
    return customer;
}

module.exports = {
    getAllCustomer,
    getCustomerByID,
    getCustomerByName,
    createCustomer,
    updateCustomer,
    deleteCustomer
}