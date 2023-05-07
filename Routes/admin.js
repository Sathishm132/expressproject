const express=require("express");
const Router=express.Router();
Router.use("/login",(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/admin/product" method="POST"><input id="username" type="text" name"title"><button type="submit">add</button></form>')
})
Router.use("/add-product",(req,res,next)=>{
   
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title"></input><input type="text" name="size"></input><button>send</buton></form>')
    
})

Router.use("/product",(req,res,next)=>{
    console.log(req.body);
    res.redirect("/")
    
    
})





module.exports =Router
    

