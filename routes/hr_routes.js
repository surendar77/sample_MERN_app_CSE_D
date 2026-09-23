let express=require('express');
let router=express.Router();

let {users}=require('../models/users');
router.get("/employees",async (req,res)=>{
    let result=await users.find();
    res.send(result);
});
//open postman =>choose get method
//localhost:3000/api/hr/employees


router.post("/assign-task",(req,res)=>{
    res.send("assign task page called");
})
//create two more routes tasks and notification in get method
module.exports=router;