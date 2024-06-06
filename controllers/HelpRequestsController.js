const Controller=require('./Controller.js');
const helpRequestService=require('../services/HelpRequestService.js');

class HelpRequestService extends Controller
{
    constructor(){
        super(helpRequestService);
    }
}

module.exports=new HelpRequestService();