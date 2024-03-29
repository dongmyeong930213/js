const express = require('express')
const app = express();

app.set('view engine','ejs')
app.set('views','./views')

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.get('/', (req,res)=>{
    console.log('루트에서 접속')
    res.render('index')
})

app.get('/login',(req,res)=>{
    console.log('login에서 요청')
    console.log(req.query);
    res.render('result', {title:'로그인 화면', userInfo:req.query})
})

app.post("/login",(req,res)=>{
    console.log('login에서 post 방식으로 요청');
    console.log('req.body--', req.body)
    res.render('result', {title:'Post 로그인화면', userInfo:req.body})
})

app.post("/js-form-check",(req,res)=>{
    console.log(req.body);
    res.send('js validation 성공')
})




app.listen(7000,(req,res)=>{
    console.log('7000포트에서 접속')
})