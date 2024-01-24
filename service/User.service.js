let User = require("../model/user.model");

// bcrypt import
let bcrypt = require('bcrypt');

async function getAllUser() {
    return User.find();
}

async function getUserByID(id) {
    return User.findById(id);
}

async function userRegister(user) {

    // generate salt
    const salt = await bcrypt.genSalt(10);

    // hash the password
    const hashPassword = await bcrypt.hash(user.password, salt);

    // create new user
    let newUser = new User({
        firstName:user.firstName,
        lastName:user.lastName,
        userName:user.userName,
        email:user.email,
        dateOfBirth: new Date(user.dateOfBirth),
        password: hashPassword
    });

    // save to the database and return 
    return newUser.save();
}

async function userLogin(user) {
    const filter = {
        userName: user.userName
    };
    let login_user = await User.findOne(filter);
    if (login_user) {
        const validPass = await bcrypt.compare(user.password, login_user.password);
        if (validPass) {
            return login_user;
        } else {
            throw Error("Invalid username or password");
        }
    } else {
        throw Error("Invalid username or password");
    }
}

module.exports = {
    getAllUser,
    getUserByID,
    userRegister,
    userLogin
}