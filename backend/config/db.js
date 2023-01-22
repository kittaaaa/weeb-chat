const mongoose = require("mongoose");

const uri = "mongodb+srv://ahyan:encrypt1415@cluster0.ydlpbst.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async() => {
    try{
        const connect = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected: ${connect.connection.host}`);

    } catch(error) {
        console.log(`Error: ${error.message}`);
        console.log('something is not good')
        process.exit();
    }
};


module.exports = connectDB;
