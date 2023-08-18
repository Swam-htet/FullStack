var express = require("express");
var router = express.Router();

// import user controller
var categories = require("./../controller/categoryController");

router.get("/", categories.getAllCategories);

router.get("/:id", categories.getCategoryByID);

// router.get("/:name", categories.getCategoryByName);

router.post("/", categories.createCategory);

router.put("/:id", categories.updateCategoryByID);

router.delete("/:id", categories.deleteCategoryByID);

module.exports = router;
