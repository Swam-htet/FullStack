let Store = require("../model/store");

// get all Store
async function getAllStore() {
    return Store.find();
}

// get store by id
async function getStoreByID(id) {
    let store = await Store.findById(id);
    return store;
}

// get store by name
async function getStoreByName(name) {
    let store = await Store.find({"name": name});
    return store;
}

// create store
async function createStore(store) {
    let newStore = new Store(store);
    return newStore.save();
}

// update store
async function updateStoreByID(id, body) {
    let store = await Store.findByIdAndUpdate(id, body, {new: true});
    return store;
}

// delete store
async function deleteStoreByID(id) {
    let store = await Store.findByIdAndDelete(id);
    return store;
}

module.exports = {
    getAllStore,
    getStoreByID,
    getStoreByName,
    createStore,
    updateStoreByID,
    deleteStoreByID
}