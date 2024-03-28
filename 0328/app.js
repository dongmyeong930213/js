const express = require('express')
const app = express();

app.set('view engine', 'ejs');
app.set('views', "./views")


app.use(express.static('public'))



app.get("/", (req,res)=>{
    res.render('index', {tilte:"HOME"})
})

app.get("/", (req,res)=>{
    res.render('about', {tilte:"ABOUT"})
})

app.get("/", (req,res)=>{
    res.render('create', {tilte:"CREATE"})
})

app.listen(8000, ()=>{
    console.log("서버 실행중")
})