const categoryService = require("../service/CategoryService");

// get all categories
async function getAllCategories(req, res, next) {
    try {
        let categories = await categoryService.getAllCategories();
        if (categories) {
            res.status(200).json(categories);
        } else {
            res.status(400).json({message: "Category not found"});
        }
    } catch (error) {
        res.status(400).json({message: `Category not found`});
    }

}

// get category by id
async function getCategoryByID(req, res, next) {
    let id = req.params.id;

    try {
        let category = await categoryService.getCategoryByID(id);
        if (!category) {
            res.status(400).json({message: `Category ID :${id} not found`});
        } else {
            res.status(200).json(category);
        }
    } catch (error) {
        res.status(400).json({message: `Category ID :${id} not found`});
    }
}

// create category
async function createCategory(req, res, next) {
    let body = req.body;
    try {
        let category = await categoryService.createCategory(body);
        if (!category) {
            res.status(400).json({message: `Can't save category`});
        } else {
            res.status(201).json(category);
        }
    } catch (error) {
        res.status(400).json({message: `Can't save category`});
    }
}

// update category by id
async function updateCategoryByID(req, res, next) {
    let id = req.params['id'];
    let updateBody = req.body;
    try {
        let category = await categoryService.updateCategoryByID(id,updateBody);
        if (!category) {
            res.status(400).json({message: `Category ID :${id} not found`});
        } else {
            res.status(200).json(category);
        }
    } catch (error) {
        res.status(400).json({message: `Category ID :${id} not found`});
    }
}

// delete category by id
async function deleteCategoryByID(req, res, next) {
    let id = req.params['id'];
    try {
        let category = await categoryService.deleteCategoryByID(id);
        if (!category) {
            res.status(400).json({message: `Category ID :${id} not found`});
        } else {
            res.status(200).json(category);
        }
    } catch (error) {
        res.status(400).json({message: `Category ID :${id} not found`});
    }
}

module.exports = {
    getAllCategories,
    getCategoryByID,
    createCategory,
    updateCategoryByID,
    deleteCategoryByID,
}