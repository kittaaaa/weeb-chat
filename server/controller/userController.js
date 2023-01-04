const asyncHandler = require('express-async-handler');
const User = require('../models/user.model');
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    if(!username || !email || !password) {
        res.status(400);
        throw new Error("Please Enter all the Feilds");
    }

    const userExists = await User.findOne({email});
    if(userExists) {
        res.status(400);
        throw new Error('User already exists');
    }
    const newUser = await User.create({
        username,
        email, 
        password, 
    });
    if(newUser) {
        res.status(201).json({
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            token: generateToken(newUser._id)
        })
    }else {
        throw new Error("Don't know what to throw");
    }
});
// for login 
const authUser = asyncHandler(async(req, res) => {
    const { email, password} = req.body;

    const user = await User.findOne({email});
    if(user && (await User.matchPassword(password))){
        res.json({
            //details
        });
    }else {
        res.status(401);
        throw new Error("Invalid Email or Password");
    }
});
module.exports = { registerUser };