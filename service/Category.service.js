let Category = require("../model/category.model");

async function getAllCategories() {
    return Category.find();
}

async function getCategoryByID(id) {
    return Category.findById(id);
}


async function createCategory(category) {
    let newCategory = new Category(category);
    return newCategory.save();
}

async function updateCategoryByID(id, body) {
    console.log("Update Body : ", body)
    return Category.findByIdAndUpdate(id, body, {new: true});
}

async function deleteCategoryByID(id) {
    return Category.findByIdAndDelete(id);
}

module.exports = {
    getAllCategories,
    getCategoryByID,
    createCategory,
    updateCategoryByID,
    deleteCategoryByID
}