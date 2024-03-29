const expressAsyncHandler = require("express-async-handler");
const Chat = require("../models/chat.model");



const accesschat = expressAsyncHandler(async (req, res) => {
    const { userId} = req.body;
    if(!userId) {
        console.log("UserId not found")
        return res.sendStatus(400)
    }
    
    let isChat = await Chat.find({
        isGroupChat: fasle,
        $and: [
            { users:{$elemMatch: {$eq:req.user._id}}},
            { users: {$elemMatch: { $eq: userId}}},
        ],
    }).populate("users", "-password").populate("latestMessage");

    isChat = await User.populate(
        isChat, 
        {
            path: "latestMessage.sender",
            select: "name email",
        }
    );
    

    if(isChat.length > 0) {
        res.send(isChat[0]);
    }else {
        let createChat = {
            chatName: "sender",
            isGroupChat: false,
            users: [req.user._id, userId]
        };

        try {
            const createdChat = await Chat.create(chatData);
            const FullChat = await Chat.findOne({_id: createChat._id}).populate("users", "-password")
            res.status(200).send(FullChat);
        } catch(error){
            res.send(400);
            throw new Error(error.message);
        }
    }   
})
module.exports = {accesschat};