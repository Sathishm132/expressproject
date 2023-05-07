const express=require('express');
const router=express.Router();
const fs = require('fs');
router.get("/",(req,res,next)=>{
    fs.readFile("./message.txt",(err,data)=>{
        res.send(`${data}<form action="/" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" >
    <input type="text" id="message" name="message"></input>
    <input type="hidden" id="username" name="username"></input><button type="submit">send</button></form>`)
    })
    
})
router.use("/",(req,res,next)=>{
    console.log(req.body.username);
    fs.writeFile("message.txt",`${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>{
     console.log("  qho")
    })
   return res.redirect("/")
})


module.exports=router