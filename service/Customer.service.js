let Customer = require("../model/customer.model");

// get all customer
async function getAllCustomer() {
    return Customer.find();
}

// get category by id
async function getCustomerByID(id) {
    return Customer.findById(id);
}


// create category
async function createCustomer(customer) {
    let newCustomer = new Customer(customer);
    return newCustomer.save();
}

// update category
async function updateCustomer(id, body) {
    return Customer.findByIdAndUpdate(id, body, {new: true});
}

// delete category
async function deleteCustomer(id) {
    return Customer.findByIdAndDelete(id);
}

module.exports = {
    getAllCustomer,
    getCustomerByID,
    createCustomer,
    updateCustomer,
    deleteCustomer
}