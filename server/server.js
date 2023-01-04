const express = require("express");
// const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes');
const { registerUser } = require("./controller/userController");
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
connectDB();
app.use(express.json()); // json data
app.get('/', (req, res) => {
    res.send('ok everything working fine');
})
app.use('/user', registerUser);



app.listen(port, console.log(`Server is running on port: ${port}`));
