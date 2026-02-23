// Import the Mongoose library
const monogoose = require('mongoose');


async function connectDB() {

    

    // Connect to MongoDB using Mongoose (cluster connection string))
    await monogoose.connect("mongodb+srv://yn:bFHxkVBfwxlVSX4d@yt-backend.znjucnj.mongodb.net/hello")

    console.log("Connected to MongoDB successfully");
}

module.exports = connectDB;