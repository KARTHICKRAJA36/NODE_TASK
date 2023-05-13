const express=require("express");
const db=require("./config/db");
const bodyparser=require("body-parser");
const app=express();
app.use(bodyparser.json());
const rout=require("./router/routes");
app.use(rout);
app.listen(3300,()=>{
    console.log("port running at 3300...");
})