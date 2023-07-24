const express=require('express');
const router=express.Router();
const todo_controller=require('../controllers/todo_controller');
router.post('/create',todo_controller.create);
router.post('/delete',todo_controller.delete);
module.exports=router