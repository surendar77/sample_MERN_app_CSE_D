let express=require('express');
let router=express.Router();
let bcrypt=require('bcrypt');
let {users}=require('../models/users');
router.post("/register",async (req,res)=>{
    let data=req.body;
    data.password=await bcrypt.hash(data.password,10);
    let newuser=new users(data);
    let result=await newuser.save();
    res.send(result);
})
router.post("/login",async (req,res)=>{
    let user=await users.findOne({email:req.body.email});
    if(user){
let passmatch=await bcrypt.compare(req.body.password,user.password);
   if(passmatch){
     res.send("Login success");
   }else{
    res.send("password invalid");
   }
    }else{
        res.send("Email invalid");
    }
})
router.get("/viewtasks",(req,res)=>{
    res.send("view task page called");
})
//do same for /viewtodo & /updateprofile
module.exports=router;