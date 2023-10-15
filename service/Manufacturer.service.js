let Manufacturer = require("../model/manufacturer.model");
let mongoose = require("mongoose");

// get all manufacturer service
async function getAllManufacturer() {
    return Manufacturer.find();
}

// get manufacturer by id
async function getManufacturerByID(id) {
    return Manufacturer.findById(id);
}

// create manufacturer
async function createManufacturer(manufacturer) {
    let newManufacturer = new Manufacturer(manufacturer);
    return newManufacturer.save();
}

// update manufacturer
async function updateManufacturer(id, body) {
    return  Manufacturer.findByIdAndUpdate(id, body, {new: true});
}

// delete manufacturer
async function deleteManufacturer(id) {
    return Manufacturer.findByIdAndDelete(id);
}

module.exports = {
    getAllManufacturer,
    getManufacturerByID,
    createManufacturer,
    updateManufacturer,
    deleteManufacturer
}