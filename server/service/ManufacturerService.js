let Manufacturer = require("../model/manufacturer");
let mongoose = require("mongoose");

// get all manufacturer service
async function getAllManufacturer() {
    return Manufacturer.find();
}

// get manufacturer by id
async function getManufacturerByID(id) {
    let manufacturer = await Manufacturer.findById(id);
    return manufacturer;
}

// get manufacturer by name
async function getManufacturerByName(name) {
    let manufacturer = await Manufacturer.find({"name": name});
    return manufacturer;
}

// create manufacturer
async function createManufacturer(manufacturer) {
    let newManufacturer = new Manufacturer(manufacturer);
    return newManufacturer.save();
}

// update manufacturer
async function updateManufacturer(id, body) {
    let manufacturer = await Manufacturer.findByIdAndUpdate(id, body, {new: true});
    return manufacturer;
}

// delete manufacturer
async function deleteManufacturer(id) {
    let manufacturer = await Manufacturer.findByIdAndDelete(id);
    return manufacturer;
}

module.exports = {
    getAllManufacturer,
    getManufacturerByID,
    getManufacturerByName,
    createManufacturer,
    updateManufacturer,
    deleteManufacturer
}