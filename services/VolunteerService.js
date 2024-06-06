const Service = require("./Service");
const volunteerRepo=require('../dal-repository/VolunteerRepo.js');
class VolunteerService extends Service
{
   constructor()
   {
    super(volunteerRepo)
   }
}

module.exports= new VolunteerService();