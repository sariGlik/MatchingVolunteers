const mongoose = require('mongoose');
require('dotenv').config();

async function connect() {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("concting to the server...");

    } catch (error) {
        console.log(error);
        throw new Error("Error connecting to db. please try later...")
    }
}

//connect();

module.exports = { connect };