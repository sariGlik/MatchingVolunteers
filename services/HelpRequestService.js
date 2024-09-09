const Service=require('./Service');
const reqestRepo=require('../dal-repository/RequestRepo');
class HelpRequestService extends Service{
    constructor()
    {
        super(reqestRepo);
    }
}
module.exports=new HelpRequestService();