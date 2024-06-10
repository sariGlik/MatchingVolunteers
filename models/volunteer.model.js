const mongoose=require('mongoose');

const volunteerSchema=new mongoose.Schema({
    _id:Number,
    firstName:String,
    phone:String,
    whatYouCanHelp:Array
});

const Volunteer=mongoose.model('volunteers',volunteerSchema);

module.exports=Volunteer;