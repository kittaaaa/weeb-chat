const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const {Schema} = mongoose;
const userModel = Schema(
    {
        username: String,
        email: String,
        password: String
        // profile: {
        //     type: String,
        //     required: true,
        //     default: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
        // }
    }, 
    {
        timestamps: true,
    }
);
userModel.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}
userModel.pre('save', async function(next) {
    if(this.isModified) {
        next()
    }
    const salt = await bcrypt.genSalt(10);

    this.password = await bcrypt.hash(this.password, salt);
    console.log("password: " + this.password);
});



const User = mongoose.model('User', userModel);
module.exports = User;






