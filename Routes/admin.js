const express=require("express");
const Router=express.Router();
Router.use("/add-product",(req,res,next)=>{
   
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title"></input><input type="text" name="size"></input><button>send</buton></form>')
    
})
Router.use("/product",(req,res,next)=>{
    console.log(req.body);
    res.redirect("/")
    
    
})





module.exports =Router
    

