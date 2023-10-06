var express = require("express");
var router = express.Router();

// auth middleware import
let auth = require("../middleware/auth");

// import user controller
var users = require("./../controller/userController");

// get all user
router.get("/", users.getAllUser);

// get by user id
router.get("/:id", users.getUserByID);

// user register
router.post("/", users.userRegister);

// user login
router.post("/login", users.userLogin);

module.exports = router;
