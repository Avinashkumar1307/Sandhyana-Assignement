const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Connection is successful");
    }).catch((err) => {
        console.log("Connection failed");
        console.error(err);
    });
};

module.exports = dbConnect;
