const express=require('express');
const app=express();
app.use((req,res,next)=>{
    console.log("rsponse")
    res.send('<h1>welcome</h1>')
})
app.use((req,res,next)=>{
    
})
app.listen(4000)
