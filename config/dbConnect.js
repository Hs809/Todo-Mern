const mongoose = require('mongoose');
const mongoUrl = "mongo db url";

const connectDB = async () => {
    try {
        await mongoose.connect(mongoUrl)
        console.log("mongoose connected...")
    } catch (error) {
        console.log(error)
    }
} 
module.exports = connectDB