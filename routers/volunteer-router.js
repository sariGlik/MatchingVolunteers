const controller=require('../controllers/VolunteerController.js');
const express=require('express');
const router=express.Router();

router.get('/',controller.getAll);
router.get('/:volunteerId',controller.get);
router.post('/:',controller.insert);
router.put('/:volunteerId',controller.update);
router.delete('/volunteerId',controller.delete);
module.exports=router;
