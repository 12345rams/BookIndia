const express=require("express");
const dotenv=require('dotenv')
dotenv.config({path:"backend/config/config.env"});
const app=express();
//Route
app.use("/",(req,res)=>{
    res.end("hellow")
})
app.listen(3000,()=>{
    console.log("Server is running at port 3000")
})
module.exports=app