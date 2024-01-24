const categoryService = require("../service/Category.service");
const responseFormatter = require("../utils/responseFormatter");

async function getAllCategories(req, res, next) {
    try {
        let categories = await categoryService.getAllCategories();
        if (categories) {
            res.status(200).json(responseFormatter(true, categories, "Get all categories successfully"));
        } else {
            res.status(400).json(responseFormatter(false, [], "Can't get all categories"));
        }
    } catch (error) {
        res.status(400).json(responseFormatter(false, null, error.message));
    }

}

async function getCategoryByID(req, res, next) {
    let id = req.params.id;
    try {
        let category = await categoryService.getCategoryByID(id);
        if (category) {
            res.status(200).json(responseFormatter(true, category, `Get category ID :${id} successfully`));
        } else {
            res.status(400).json(responseFormatter(false, null, `Category ID :${id} not found`));
        }
    } catch (error) {
        res.status(400).json(responseFormatter(false, null, error.message));
    }
}

async function createCategory(req, res, next) {
    let body = req.body;
    try {
        let category = await categoryService.createCategory(body);
        if (category) {
            res.status(201).json((responseFormatter(true, category, `Save category successfully`)));
        } else {
            res.status(400).json(responseFormatter(false, null, `Can't save category`));
        }
    } catch (error) {
        res.status(400).json(responseFormatter(false, null, error.message));
    }
}

async function updateCategoryByID(req, res, next) {
    let id = req.params['id'];
    let updateBody = req.body;
    try {
        let category = await categoryService.updateCategoryByID(id,updateBody);
        if (category) {
            res.status(200).json(responseFormatter(true, category, `Update category ID :${id} successfully`));
        } else {
            res.status(400).json(responseFormatter(false, null, `Category ID :${id} not found`));
        }
    } catch (error) {
        res.status(400).json(responseFormatter(false, null, error.message));
    }
}

async function deleteCategoryByID(req, res, next) {
    let id = req.params['id'];
    try {
        let category = await categoryService.deleteCategoryByID(id);
        if (category) {
            res.status(200).json(responseFormatter(true, category, `Delete category ID :${id} successfully`));
        } else {
            res.status(400).json(responseFormatter(false, null, `Category ID :${id} not found`));

        }
    } catch (error) {
        res.status(400).json(responseFormatter(false, null, error.message));
    }
}

module.exports = {
    getAllCategories,
    getCategoryByID,
    createCategory,
    updateCategoryByID,
    deleteCategoryByID,
}