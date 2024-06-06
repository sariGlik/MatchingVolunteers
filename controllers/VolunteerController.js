
const Controller=require('./Controller.js');
const volunterService=require('../services/VolunteerService.js');
class VolunteerController extends Controller
{
    constructor()
    {
        super(volunterService);
    }
}
module.exports=new VolunteerController();