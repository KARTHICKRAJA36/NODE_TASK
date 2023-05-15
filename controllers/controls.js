const usermodel = require("../models/query");
const db=require("../config/db");
const bcrypt=require("bcrypt");



     const alluser= async(req,res)=>
    {
        var results=await usermodel.alluser();
        if(results)
        res.send(results);

    }
    const register=async (req,res)=>{
        var username=req.body.username;
        var password=req.body.password;
        var x=await usermodel.register(username,password);
        if(x==true)
        res.send("Registered successfully");
        else
        res.send("Registration failed");
    }
    
    const login = async (req,res)=>{
        var username=req.body.username;
        var password=req.body.password;
        let z= await usermodel.login(username,password);  
        res.send(z);  
}

    const deletedata=async(req,res)=>{
        var username=req.body.username;
        //var password=req.body.password;
        let y= await usermodel.deletedata(username);
        if(y==true){
            res.send("user details deleted");
        }
        else{
            res.send("failed to delete");
        }
    }
    const update=async(req,res)=>{
        var username=req.body.username;
        var password=req.body.password;
        let k=await usermodel.update(username,password);
        if(k==true){
            res.send("data updated succesfully");
        }
        else{
            res.send("failed to update");
        }
    }


module.exports={
    alluser,
    register,
    login,
    deletedata,
    update
}