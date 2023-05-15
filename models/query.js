const db=require("../config/db");
const usercontrol=require("../controllers/controls");
const jswn=require("jsonwebtoken");
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
  static async deletedata(username){
    return new Promise(resolve=>{
      db.query('delete from information where username=?',[username],(err,result)=>{
        if(!err)
        resolve (true);
        else
        resolve(false);

      })
    })
  }
  static async login(username, password) {

    return new Promise(resolve => {
      let sql=`select * from information where username='${username}' && password='${password}'`;
     // console.log(db.query(sql));
 db.query(sql, (err, results) => {
  console.log(results.length);
    if (err) {
                resolve(false);
            }
            if(results.length === 0)
            { 
                resolve("invalid username and password");
            }
            const token = jswn.sign({ username: results[0].username }, 'secretkeyyy', { expiresIn: '10m' });
            resolve(token);
        });
    })
}
static async update(username,password){
  return new Promise(resolve=>{
    let sql = `UPDATE information SET password='${password}' WHERE username=${username}`;
    db.query(sql,(err,results)=>{
      if(err){
        resolve(false)
      }
      if(results.length===0){
        resolve("false")
      }
      resolve(true)
    })
  })
}


}
module.exports=usermodel;