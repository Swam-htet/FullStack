const manufacturerService = require("../service/Manufacturer.service");
const responseFormatter = require("../utils/responseFormatter");

async function getAllManufacturer(req, res, next) {
    try {
        let manufacturers = await manufacturerService.getAllManufacturer();
        if (manufacturers) {
            res.status(200).json(responseFormatter(true, manufacturers, "Get all manufacturer success"));
        } else {
            res.status(400).json(responseFormatter(false, [], "Manufacturer not found"));
        }
    } catch (error) {
        res.status(400).json(responseFormatter(false, null, error.message));
    }

}

async function getManufacturerByID(req, res, next) {
    let id = req.params.id;
    try {
        let manufacturer = await manufacturerService.getManufacturerByID(id);
        if (manufacturer) {
            res.status(200).json(responseFormatter(false, manufacturer, `Get manufacturer by ID(${id}) success`));
        } else {
            res.status(400).json(responseFormatter(true, null, `Manufacturer ID(${id}) not found`));
        }
    } catch (error) {
        res.status(400).json(responseFormatter(false, null, error.message));
    }
}

async function createManufacturer(req, res, next) {
    let body = req.body;
    try {
        let manufacturer = await manufacturerService.createManufacturer(body);
        if (manufacturer) {
            res.status(201).json(responseFormatter(true, manufacturer, `Create Manufacturer success`));
        }
    } catch (error) {
        res.status(400).json(responseFormatter(false, null, error.message));
    }
}

async function updateManufacturerByID(req, res, next) {
    let id = req.params['id'];
    let updateBody = req.body;
    try {
        let manufacturer = await manufacturerService.updateManufacturer(id,updateBody);
        if (manufacturer) {
            res.status(200).json(responseFormatter(true, manufacturer, `Update Manufacturer(${id}) success`));
        } else {
            res.status(400).json(responseFormatter(false, null, `Manufacturer ID :${id} not found`));
        }
    } catch (error) {
        res.status(400).json(responseFormatter(false, null, error.message));
    }
}

async function deleteManufacturerByID(req, res, next) {
    let id = req.params['id'];
    try {
        let manufacturer = await manufacturerService.deleteManufacturer(id);
        if (manufacturer) {
            res.status(200).json(responseFormatter(true, manufacturer, `Delete Manufacturer(${id}) success`));
        } else {
            res.status(400).json(responseFormatter(false, null, `Manufacturer ID :${id} not found`));
        }
    } catch (error) {
        res.status(400).json(responseFormatter(false, null, error.message));
    }
}

module.exports = {
    getAllManufacturer,
    getManufacturerByID,
    createManufacturer,
    updateManufacturerByID,
    deleteManufacturerByID,
}