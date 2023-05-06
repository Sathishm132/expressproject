const express=require('express');
const bodyparser=require('body-parser')
const app=express();
app.use(bodyparser.urlencoded({extended:false}))
app.use("/add-product",(req,res,next)=>{
   
    res.send('<form action="/product"><input type="text" name="title"></input><button>send</button><input type="text" name="size"></input><button>send</buton></form>')
    
})
app.use("/product",(req,res,next)=>{
    console.log(req.body);
    res.redirect("/")
    
    
})

app.use("/",(req,res,next)=>{
    
    res.send('<h1>welcome</h1>')
})

app.listen(4000)
