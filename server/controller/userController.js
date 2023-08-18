let userService = require("../service/UserService");
const jwt = require('jsonwebtoken');
const {config} = require('../Config/config');

const bcrypt = require('bcrypt');

async function getAllUser(req,res,next){
    try {
        let users = await userService.getAllUser();
        if (users) {
            res.status(200).json(users);
        } else {
            res.status(400).json({message: "User not found"});
        }
    } catch (error) {
        res.status(400).json({message: `User not found`});
    }
}

async function getUserByID(req,res,next){
    let id = req.params.id;
    try {
        let user = await userService.getUserByID(id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(400).json({message: `User ID:${id}  not found`});
        }
    } catch (error) {
        res.status(400).json({message: `User ID:${id}  not found`});
    }
}

async function userRegister(req,res,next){
    let user_data = req.body;
    try{
        let user = await userService.userRegister(user_data);
        let payload = { id: user._id };
        const token = jwt.sign(payload, config.TOKEN_SECRET);
        res.status(201).send({ token });
    }
    catch (e){
        console.log("Error - ",e);
        res.status(400).send({message:"User already existed"});
    }
}

async function userLogin(req,res,next){
    let user_date = req.body;

    try{
        let user = await userService.userLogin(user_date);
        let payload = {
            id:user._id,
        }
        let token = await jwt.sign(payload,config.TOKEN_SECRET);
        res.status(200).send({token});
    }
    catch (err) {
        console.log(err)
        res.status(401).send({message:"Invalid user"});
    }
}

// controller export
module.exports = {
    getAllUser,
    getUserByID,
    userRegister,
    userLogin
}

