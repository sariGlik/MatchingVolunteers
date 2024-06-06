const mongoose = require('mongoose');
////
const data=require('./data');
require('dotenv').config();
////

async function connect() {
    try {
        await mongoose.connect(process.env.CONNECTIONSTRING);
        console.log("concting to the server...");

        /////////////////////

        const item = await this.model.create(data);

        ///////////////

    } catch (error) {
        console.log(error);
        throw new Error("Error connecting to db. please try later...")
    }
}

connect();

module.exports = { connect };