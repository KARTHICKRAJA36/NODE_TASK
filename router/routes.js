const express=require("express");
const {alluser,register,login,deletedata,update}=require("../controllers/controls");
const router=require("express").Router();
//const middleware=require("../middleware/function");
const updatedetails = require("../middleware/function");


router.get('/allusers',alluser);
router.post('/register',register);
router.post('/login',login);
router.put('/update',updatedetails,update);
router.post('/delete',deletedata);

module.exports=router;