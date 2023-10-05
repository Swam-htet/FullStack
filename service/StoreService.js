let Store = require("../model/store");

// get all Store
async function getAllStore() {
    return Store.find();
}

// get store by id
async function getStoreByID(id) {
    return Store.findById(id);
}

// create store
async function createStore(store) {
    let newStore = new Store(store);
    return newStore.save();
}

// update store
async function updateStoreByID(id, body) {
    return Store.findByIdAndUpdate(id, body, {new: true});
}

// delete store
async function deleteStoreByID(id) {
    return Store.findByIdAndDelete(id);
}

module.exports = {
    getAllStore,
    getStoreByID,
    createStore,
    updateStoreByID,
    deleteStoreByID
}