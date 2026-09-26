let express=require('express');
let router=express.Router();

let {users}=require('../models/users');
router.get("/employees",async (req,res)=>{
    let result=await users.find();
    res.send(result);
});

router.delete("/deleteemp/:id",async (req,res)=>{
    let result=await users.findByIdAndDelete(req.params.id);
    if(result){
        res.send("emp record deleted success");
    }
})




router.post("/assign-task",(req,res)=>{
    res.send("assign task page called");
})
//create two more routes tasks and notification in get method
module.exports=router;