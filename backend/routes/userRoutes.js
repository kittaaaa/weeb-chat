const express = require('express');
const { registerUser, authUser, allUsers } = require('../controller/userController');
const User = require('../models/user.model');
const { mprotect } = require('../middleware/authMiddleware');
const router = express.Router();



router.route('/').post(registerUser).get(mprotect, allUsers);
router.post('/login', authUser);




// // a route which would fetch users from the database
// router.get('/userinfo', async (req, res) => {
//     let usersdata = await User.find({})
//     res.send(usersdata).status(200);
// });

// router.get('/:id', async(req, res) => {
//     // let query = {_id: ObjectId(req.params.id)};
//     let query = {_id: Object(req.params.id)};
//     let result = await User.findOne(query);
//     if(!result) res.send("Not FOund").status(404);
//     else res.send(result).status(200);
    
// })
module.exports = router;
