const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const ehbs=require('express-handlebars')//template engine

app.engine('hbs',ehbs.engine({layoutsDir:'views',defaultLayout:"main",extname:"hbs"}))
app.set("views","views")

app.listen(800)