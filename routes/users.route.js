var express = require("express");
var router = express.Router();

// auth middleware import
let auth = require("../middleware/auth.moddleware");

// import user controller
var usersRoute = require("../controller/user.controller");

// get all user
router.get("/", usersRoute.getAllUser);

// get by user id
router.get("/:id", usersRoute.getUserByID);

// user register
router.post("/", usersRoute.userRegister);

// user login
router.post("/login", usersRoute.userLogin);

module.exports = router;
