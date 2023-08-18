let Category = require("../model/category");

// get all categories service
async function getAllCategories() {
    return Category.find();
}

// get category by id
async function getCategoryByID(id) {
    let category = await Category.findById(id);
    return category;
}

// get category by name
async function getCategoryByName(name) {
    let category = await Category.find({"name": name});
    return category;
}

// create category
async function createCategory(category) {
    let newCategory = new Category(category);
    return newCategory.save();
}

// update category
async function updateCategoryByID(id, body) {
    console.log("Update Body : ", body)
    let category = await Category.findByIdAndUpdate(id, body, {new: true});
    return category;
}

// delete category
async function deleteCategoryByID(id) {
    let category = await Category.findByIdAndDelete(id);
    return category;
}

module.exports = {
    getAllCategories,
    getCategoryByID,
    getCategoryByName,
    createCategory,
    updateCategoryByID,
    deleteCategoryByID
}