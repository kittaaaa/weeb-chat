const asyncHandler = require('express-async-handler');
const User = require('../models/user.model');
const generateToken = require("../config/generateToken");



const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    console.log(req.body);

    // checks for email exist in database
    const userExists = await User.findOne({email});

    console.log('i am lol');
    if(userExists) {
        res.status(400);
        throw new Error('User already exists');
    }
    // creating a new user
    const user = await User.create({
        username,
        email, 
        password
    });
    if(user) {
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            password: user.password,
            token: generateToken(user._id)
        })
    }else {
        res.status(400);
        throw new Error("Don't know what to throw");
}
});
// for login 
const authUser = asyncHandler(async(req, res) => {
    const { email, password} = req.body;
    console.log(req.body);
    const user = await User.findOne({email});
    
    if(user && (await user.matchPassword(password))){
        console.log('loggedin');
        res.json({
            //details
            _id:user._id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id)
        });
    }else {
        res.status(401);
        throw new Error("Invalid Email or Password");
    }
    console.log('yay you are in lol');
});
module.exports = { registerUser, authUser };
