const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const ehbs=require('express-handlebars')//template engine

app.engine('hbs',ehbs.engine({layoutsDir:'views',defaultLayout:"main",extname:"hbs"}))
app.set("views","views")

app.get('/',(req,res)=>{
    let message="test"
    res.render('main.hbs',{message})
})

app.listen(800)