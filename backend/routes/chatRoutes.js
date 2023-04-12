const express = require("express");
const { mprotect } = require("../middleware/authMiddleware");
const router = express.Router();


//router.route('/').post(mprotect, accesschat);
//router.route('/').post(mprotect, fetchChats);
// router.route('/group').post(mprotect, createGroupChat);
// router.route('/regroup').put(mprotect, renameGroup); // re == rename
// router.route('/rmgroup').put(mprotect, removeGroup); // rm == remove
// router.route('/addgroup').put(mprotect, addGroup);

module.exports = router;