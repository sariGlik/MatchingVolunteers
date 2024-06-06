const Repository=require('./Repository.js');
const request=require('./models/request.model.js');

class RequestRepo extends Repository{
    constructor(request){
        super(request);
    }
}

module.exports=RequestRepo;