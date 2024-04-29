const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();
PORT = process.env.PORT || 4000
app.use(express.json());
const dbconnect = require("./config/database");
dbconnect();
app.use(cors());
const userRoutes = require('./routes/User')
app.use('/api/user',userRoutes)
app.listen(PORT, () => {
    console.log("App is running");
})