const express = require('express')
const app = express();

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.get("/", (req,res)=>{
    console.log('루트 접속')
    res.render('index')
})

//ajax 요청
app.get('/ajax',(req,res)=>{
    console.log(req.query);
    res.send(req.query);
})

app.post('/ajax', (req,res)=>{
    console.log(req.body);
    res.send(req.body);
})

// axios
app.get('/axios',(req,res)=>{
    console.log(req.query);
    res.send(req.query);
})


app.post('/axios', (req,res)=>{
    console.log(req.body);
    res.send(req.body);
})


// fetch
app.get('/fetch', (req,res)=>{
    console.log(req.query);
    res.send(req.query);
})

app.post('/fetch',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
})










app.listen(8888,()=>{
    console.log('8888포트 사용')
})