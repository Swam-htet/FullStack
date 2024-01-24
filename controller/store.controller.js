const storeService = require("../service/Store.service");
const responseFormatter = require("../utils/responseFormatter");


async function getAllStore(req, res, next) {
    try {
        let stores = await storeService.getAllStore();
        if (stores) {
            res.status(200).json(responseFormatter(true, stores, "Get all stores successfully"));
        } else {
            res.status(400).json(responseFormatter(false, [], "Can't get all stores"));
        }
    } catch (error) {
        res.status(400).json(responseFormatter(false, null, error.message));
    }

}

async function getStoreByID(req, res, next) {
    let id = req.params.id;
    try {
        let store = await storeService.getStoreByID(id);
        if (store) {
            res.status(200).json(responseFormatter(true, store, `Get store ID :${id} successfully`));
        } else {
            res.status(400).json(responseFormatter(false, null, `Store ID :${id} not found`));
        }
    } catch (error) {
        res.status(400).json(responseFormatter(false, null, error.message));
    }
}

async function createStore(req, res, next) {
    let body = req.body;
    try {
        let store = await storeService.createStore(body);
        if (store) {
            res.status(201).json((responseFormatter(true, store, `Save store successfully`)));
        } else {
            res.status(400).json(responseFormatter(false, null, `Can't save store`));
        }
    } catch (error) {
        res.status(400).json(responseFormatter(false, null, error.message));
    }
}

async function updateStoreByID(req, res, next) {
    let id = req.params.id;
    let updateBody = req.body;
    try {
        let store = await storeService.updateStoreByID(id,updateBody);
        if (store) {
            res.status(200).json(responseFormatter(true, store, `Update store ID :${id} successfully`));
        } else {
            res.status(400).json(responseFormatter(false, null, `Store ID :${id} not found`));
        }
    } catch (error) {
        res.status(400).json(responseFormatter(false, null, error.message));
    }
}

async function deleteStoreByID(req, res, next) {
    let id = req.params.id;
    try {
        let store = await storeService.deleteStoreByID(id);
        if (store) {
            res.status(200).json(responseFormatter(true, store, `Delete store ID :${id} successfully`));
        } else {
            res.status(400).json(responseFormatter(false, null, `Store ID :${id} not found`));
        }
    } catch (error) {
        res.status(400).json(responseFormatter(false, null, error.message));
    }
}

module.exports = {
    getAllStore,
    getStoreByID,
    createStore,
    updateStoreByID,
    deleteStoreByID,
}