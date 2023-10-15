var express = require("express");
var router = express.Router();

// import user controller
var categoriesRoute = require("../controller/category.controller");

router.get("/", categoriesRoute.getAllCategories);

router.get("/:id", categoriesRoute.getCategoryByID);

router.post("/", categoriesRoute.createCategory);

router.put("/:id", categoriesRoute.updateCategoryByID);

router.delete("/:id", categoriesRoute.deleteCategoryByID);

module.exports = router;
