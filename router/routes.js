const express=require("express");
const {alluser,register,login,deletedata}=require("../controllers/controls");
const router=require("express").Router();


router.get('/allusers',alluser);
router.post('/register',register);
router.post('/login',login);
// router.post('/update',)
router.post('/delete',deletedata);

module.exports=router;