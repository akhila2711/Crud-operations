const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const ehbs=require('express-handlebars')//template engine
const dbo=require('./db')

app.engine('hbs',ehbs.engine({layoutsDir:'views',defaultLayout:"main",extname:"hbs"}))
app.set("views","views")

app.get('/',async (req,res)=>{
    let database= await dbo.getdataBase()
    const collection =database.collection("books")
    const cursor=collection.find({})
    let employee=cursor.toArray()
    let message=" "
    res.render('main.hbs',{message})
})

app.listen(8000,()=>{
    console.log("listening to port 8000")

})
