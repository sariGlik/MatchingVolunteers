const controller=require('../controllers/HelpRequestsController.js');
const express=require('express');
const router=express.Router();
router.get('/',controller.getAll);
router.get('/helpRequestId',controller.get);
router.post('/',controller.insert);
router.put('/helpRequestId',controller.update);
router.delete('/helpRequestId',controller.delete);


module.exports=router;
