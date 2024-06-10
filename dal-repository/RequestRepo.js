const Repository=require('./Repository.js');
const request=require('../models/request.model.js');

class RequestRepo extends Repository{
    constructor(){
        super(request);
    }
}

module.exports=new RequestRepo();