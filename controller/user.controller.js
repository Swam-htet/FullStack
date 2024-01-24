let userService = require("../service/User.service");
const jwt = require('jsonwebtoken');
const responseFormatter = require("../utils/responseFormatter");

async function getAllUser(req,res,next){
    try {
        let users = await userService.getAllUser();
        if (users) {
            res.status(200).json(responseFormatter(true, users, "Get all user success"));
        } else {
            res.status(400).json(responseFormatter(false, [], "User not found"));
        }
    } catch (error) {
        res.status(400).json(responseFormatter(false, null, error.message));
    }
}

async function getUserByID(req,res,next){
    let id = req.params.id;
    try {
        let user = await userService.getUserByID(id);
        if (user) {
            res.status(200).json(responseFormatter(true, user, `Get user by ID(${id}) success`));
        } else {
            res.status(400).json(responseFormatter(false, null, `User ID:${id}  not found`));
        }
    } catch (error) {
        res.status(400).json(responseFormatter(false, null, error.message));
    }
}

async function userRegister(req,res,next){
    let user_data = req.body;
    try {
        let user = await userService.userRegister(user_data);
        let payload = {id: user._id};
        const token = jwt.sign(payload, process.env.TOKEN_SECRET);
        res.status(201).send(responseFormatter(true, {token}, "User created"));
    } catch (error) {
        res.status(400).send(responseFormatter(false, null, error.message));
    }
}

async function userLogin(req,res,next){
    let user_date = req.body;
    try{
        let user = await userService.userLogin(user_date);
        let payload = {
            id:user._id,
        }
        let token = await jwt.sign(payload,process.env.TOKEN_SECRET);
        res.status(200).send(responseFormatter(true, {token}, "Login success"));
    }
    catch (err) {
        console.log(err)
        res.status(401).send(responseFormatter(false, null, err.message));
    }
}

// controller export
module.exports = {
    getAllUser,
    getUserByID,
    userRegister,
    userLogin
}

