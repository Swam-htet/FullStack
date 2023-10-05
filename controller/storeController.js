const storeService = require("../service/StoreService");

// get all stores
async function getAllStore(req, res, next) {
    try {
        let stores = await storeService.getAllStore();
        if (stores) {
            res.status(200).json(stores);
        } else {
            res.status(400).json({message: "Store not found"});
        }
    } catch (error) {
        res.status(400).json({message: `Store not found`});
    }

}

// get store by id
async function getStoreByID(req, res, next) {
    let id = req.params.id;

    try {
        let store = await storeService.getStoreByID(id);
        if (!store) {
            res.status(400).json({message: `Store ID :${id} not found`});
        } else {
            res.status(200).json(store);
        }
    } catch (error) {
        res.status(400).json({message: `Store ID :${id} not found`});
    }
}

// create store
async function createStore(req, res, next) {
    let body = req.body;
    try {
        let store = await storeService.createStore(body);
        if (!store) {
            res.status(400).json({message: `Can't save store`});
        } else {
            res.status(201).json(store);
        }
    } catch (error) {
        res.status(400).json({message: `Can't save store`});
    }
}

// update store by id
async function updateStoreByID(req, res, next) {
    let id = req.params.id;
    let updateBody = req.body;
    try {
        let store = await storeService.updateStoreByID(id,updateBody);
        if (!store) {
            res.status(400).json({message: `Store ID :${id} not found`});
        } else {
            res.status(200).json(store);
        }
    } catch (error) {
        res.status(400).json({message: `Store ID :${id} not found`});
    }
}

// delete store by id
async function deleteStoreByID(req, res, next) {
    let id = req.params.id;
    try {
        let store = await storeService.deleteStoreByID(id);
        if (!store) {
            res.status(400).json({message: `Store ID :${id} not found`});
        } else {
            res.status(200).json(store);
        }
    } catch (error) {
        res.status(400).json({message: `Store ID :${id} not found`});
    }
}

module.exports = {
    getAllStore,
    getStoreByID,
    createStore,
    updateStoreByID,
    deleteStoreByID,
}