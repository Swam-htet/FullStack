const manufacturerService = require("../service/Manufacturer.service");

// get all manufacturer
async function getAllManufacturer(req, res, next) {
    try {
        let manufacturers = await manufacturerService.getAllManufacturer();
        if (manufacturers) {
            res.status(200).json(manufacturers);
        } else {
            res.status(400).json({message: "Manufacturer not found"});
        }
    } catch (error) {
        res.status(400).json({message: `Manufacturer not found`});
    }

}

// get manufacturer by id
async function getManufacturerByID(req, res, next) {
    let id = req.params.id;

    try {
        let manufacturer = await manufacturerService.getManufacturerByID(id);
        if (!manufacturer) {
            res.status(400).json({message: `Manufacturer ID :${id} not found`});
        } else {
            res.status(200).json(manufacturer);
        }
    } catch (error) {
        res.status(400).json({message: `Manufacturer ID :${id} not found`});
    }
}

// create manufacturer
async function createManufacturer(req, res, next) {
    let body = req.body;
    try {
        let manufacturer = await manufacturerService.createManufacturer(body);
        if (!manufacturer) {
            res.status(400).json({message: `Can't save Manufacturer`});
        } else {
            res.status(201).json(manufacturer);
        }
    } catch (error) {
        res.status(400).json({message: `Can't save Manufacturer`});
    }
}

// update manufacturer by id
async function updateManufacturerByID(req, res, next) {
    let id = req.params['id'];
    let updateBody = req.body;
    try {
        let manufacturer = await manufacturerService.updateManufacturer(id,updateBody);
        if (!manufacturer) {
            res.status(400).json({message: `Manufacturer ID :${id} not found`});
        } else {
            res.status(200).json(manufacturer);
        }
    } catch (error) {
        res.status(400).json({message: `Manufacturer ID :${id} not found`});
    }
}

// delete manufacturer by id
async function deleteManufacturerByID(req, res, next) {
    let id = req.params['id'];
    try {
        let manufacturer = await manufacturerService.deleteManufacturer(id);
        if (!manufacturer) {
            res.status(400).json({message: `Manufacturer ID :${id} not found`});
        } else {
            res.status(200).json(manufacturer);
        }
    } catch (error) {
        res.status(400).json({message: `Manufacturer ID :${id} not found`});
    }
}

module.exports = {
    getAllManufacturer,
    getManufacturerByID,
    createManufacturer,
    updateManufacturerByID,
    deleteManufacturerByID,
}