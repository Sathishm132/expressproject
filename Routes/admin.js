const express=require("express");
const path=require("path")
const rootdir=require("../util/path")
const Router=express.Router();
Router.use("/login",(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/admin/product" method="POST"><input id="username" type="text" name"title"><button type="submit">add</button></form>')
})
Router.use("/add-product",(req,res,next)=>{
   
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
    
})

Router.use("/product",(req,res,next)=>{
    console.log(req.body);
    res.redirect("/")
    
    
})





module.exports =Router
    

