var express=require('express')
var app=express()
var ejs=require("ejs");
require('dotenv').config()
var path=require("path");
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res)=>{
  res.render('index',{uri:process.env.uri})
  console.log(process.env.uri);
})

app.listen(1313);
