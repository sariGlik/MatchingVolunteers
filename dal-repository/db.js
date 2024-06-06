const mongoose = require('mongoose');
////
const data=require('./data');
////

async function connect() {
    try {
        await mongoose.connect("mongodb+srv://sari:AS214378465@cluster0.poy0xeo.mongodb.net/");
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