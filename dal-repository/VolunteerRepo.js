const Repository=require('./Repository.js');
const volunteer=require('../models/volunteer.model.js');

class VolunteerRepo extends Repository{
    constructor(volunteer){
        super(volunteer);
    }
}

module.exports=VolunteerRepo;