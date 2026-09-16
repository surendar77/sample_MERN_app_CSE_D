let express=require('express');
let router=express.Router();
router.get("/employees",(req,res)=>{
    res.send("Employees called");
});
router.post("/assign-task",(req,res)=>{
    res.send("assign task page called");
})
//create two more routes tasks and notification in get method
module.exports=router;