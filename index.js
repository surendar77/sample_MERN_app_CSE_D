let express=require('express');
let hrroutes=require('./routes/hr_routes');
let app=express();

app.use("/api/hr",hrroutes);
//open browser localhost:3000/api/hr/employees

// run the server in port 3000
app.listen(3000,()=>{
    console.log("server running on port 3000")
})