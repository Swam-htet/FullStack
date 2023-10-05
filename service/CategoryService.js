let Category = require("../model/category");

// get all categories service
async function getAllCategories() {
    return Category.find();
}

// get category by id
async function getCategoryByID(id) {
    return Category.findById(id);
}


// create category
async function createCategory(category) {
    let newCategory = new Category(category);
    return newCategory.save();
}

// update category
async function updateCategoryByID(id, body) {
    console.log("Update Body : ", body)
    return Category.findByIdAndUpdate(id, body, {new: true});
}

// delete category
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