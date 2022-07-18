const mongoose = require('mongoose');
const mongoUrl = "mongodb+srv://hitesh7738:23NHmGpGjjoYT8YI@cluster0.cjreqiy.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(mongoUrl)
        console.log("mongoose connected...")
    } catch (error) {
        console.log(error)
    }
} 
module.exports = connectDB