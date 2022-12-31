const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;



// app.get('/', (req, res) => {
//     res.send("Yo visited this path and here i am using nodemon");
// })

// app.get('/api/chat', (req, res) => {
//     res.send(chats);
// })
// app.get('/api/chat/:id', (req, res) => {
//     const singleChat = chats.find(c => c._id === req.params.id);
//     res.send(singleChat);
// })

app.listen(port, console.log(`Server is running on port: ${port}`));
