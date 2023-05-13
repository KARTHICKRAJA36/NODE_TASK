const db=require("../config/db");
const usercontrol=require("../controllers/controls");
class usermodel{
  static async  alluser(){
    return new Promise(resolve=>{
    db.query('select * from information',[],function(err,result){
        if(!err)
        resolve(result)
    })    
    })
  }
  static async register(username,password){
    return new Promise(resolve=>{
      db.query('insert into information values (?,?)',[username,password],(err,result)=>{
        if(!err)
       resolve (true)
        else
        resolve (false)

      })
    })
  }
  static async deletedata(username,password){
    return new Promise(resolve=>{
      db.query('delete from information where username=? && password=?',[username,password],(err,result)=>{
        if(!err)
        resolve (true);
        else
        resolve(false);

      })
    })
  }
 
}
module.exports=usermodel;