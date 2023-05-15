const jswn=require("jsonwebtoken");
let updatedetails =(req,res,next)=>{
    const token=req.headers["authorization"];
    if(token){
        jswn.verify(token,"secretkeyyy",(err,decoded)=>{
            if(err){
                res.status(401).send({message:"accessdenied"});
                return;
            }
            else{
                req.username=decoded.username
                res.send("Token matched")
                
            }
            next();
        })
        
    }
}
module.exports=updatedetails;
