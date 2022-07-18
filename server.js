const express = require('express');
const cors = require('cors');
const connectDB = require("./config/dbConnect");
const app = express();
require("dotenv").config()

const PORT = process.env.PORT || 5000

// Mongoose connection
connectDB();


app.use(express.json({extended: false}))
app.use(cors({
    origin: '*'
}))

app.use("/", require('./routes/index'));


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
