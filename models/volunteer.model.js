const mongoose=require('mongoose');

const volunteerSchema=new mongoose.Schema({
    id:Number,
    name:String,
    phone:String,
    helps:Array
});

const Volunteer=mongoose.model('volunteer',volunteerSchema);

module.exports=Volunteer;