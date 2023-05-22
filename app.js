const express=require('express');
const path=require("path")
const bodyparser=require('body-parser')
const adminrouter=require('./Routes/admin')
const shoproute=require('./Routes/shop')
const app=express();
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))

app.use('/admin',adminrouter)
app.use(shoproute)
app.use((req,res,next)=>{
    res.send('<h1>page not found</h1>')
})



app.listen(4000)
