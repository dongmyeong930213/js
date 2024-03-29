const express = require('express')
const app = express();

app.set('view engine','ejs')
app.set('views','./views')

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req,res)=>{
    console.log('정보')
    res.render('index')
})


app.listen(7777,(req,res)=>{
    console.log('7777포트에 접속')
})