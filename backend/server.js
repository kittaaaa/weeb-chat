const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//importing routes
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');


const User = require('./models/user.model');
// const { registerUser } = require("./controller/userController");
const cors = require('cors');
const { authUser } = require("./controller/userController");
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
connectDB();






// const corsOptions = {
//     origin: "http://localhost:5000"
// };
app.use(cors());
app.use(express.json()); // json data
app.use(express.urlencoded({extended: false}));



//enable CORS
// app.use(function(req, res, ne        xt){
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
//     next();
    
// })
app.get('/', (req, res) => {
    res.send('You got it right');
})
app.use('/api/user',userRoutes);
app.use('/api/chat', chatRoutes);

// app.get('/profile', async (req, res) => {
//     const data = await User.find({});
//     console.log(data);


// })

app.listen(port, console.log(`Server is running on port: ${port}`));
