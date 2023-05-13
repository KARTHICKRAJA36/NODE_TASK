const mysql=require("mysql");
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Karthick@1601",
    database:"project"
})
db.connect((err)=>{
    if(err){
        throw err;
    }
    else{
        console.log("database connected...");
    }
})

module.exports=db;