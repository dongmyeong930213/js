const express = require('express')
const app = express();

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.get("/", (req,res)=>{
    console.log('루트에서 접속')
    res.render('index')
})

app.get('/login', (req,res)=>{
    console.log('login 페이지에서 옴')
    console.log(req.query); // (객체 형태로 넘어온다)
    res.render('result',{title: "get 요청", userInfo:req.query})

})

app.listen(3000,()=>{
    console.log('Server is running')
})