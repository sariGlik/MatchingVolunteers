const mongoose=require('mongoose');

const requstSchema=new mongoose.Schema({
    requestId:Number,
    volunteerName:String,
    phone:String,
    description:String,
    place:String,
    status:Number,
    numOfPeople:Number,
    volunteerCode:Number
});

const Request=mongoose.model('volunteer',requstSchema);

module.exports=Request;