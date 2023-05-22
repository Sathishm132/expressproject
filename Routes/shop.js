const express=require('express');
const router=express.Router();
const path= require("path")
const fs = require('fs');
router.get("/",(req,res,next)=>{
    fs.readFile("./message.txt",(err,data)=>{
        res.sendFile(path.join(__dirname,'../','views','shop.html'))})
    
})
router.use("/",(req,res,next)=>{
    console.log(req.body.username);
    fs.writeFile("message.txt",`${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>{
     console.log("  qho")
    })
   return res.redirect("/")
})


module.exports=router