const usermodel = require("../models/query");
const db=require("../config/db");
const bcrypt=require("bcrypt");
const jswn=require("jsonwebtoken");


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
        login(username,password);
      
      function login(username,password){
        db.query('select password from information where username=?',[username],(err,results)=>{
            if(err){
                res.send("error occured");
            }
            else{
                if(results.length>0){
                    const comparison=bcrypt.compare(password,results[0].password)
                    if(comparison){
                        const token=jswn.sign({password},'secretkey',{ expiresIn:'10m'});
                        
                       // res.send({token:token});
                        res.send("login successfully");   
                    }
                    else{
                        res.send("username and password mismatch");
                    }
                }
                else{
                    res.send("username doesn't exit")
                }
            }
            
        })
    }
}

    const deletedata=async(req,res)=>{
        var username=req.body.username;
        var password=req.body.password;
        let y= await usermodel.deletedata(username,password);
        if(y==true){
            res.send("user details deleted");
        }
        else{
            res.send("failed to delete");
        }
    }


module.exports={
    alluser,
    register,
    login,
    deletedata
}