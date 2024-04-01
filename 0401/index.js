const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.set('views','./views')

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req,res)=>{
    res.render('main')
})

app.get('/test1', (req,res)=>{
    res.render('test1')
})

app.get('/test2',(req,res)=>{
    res.render('test2')
})

// app.post('/test1-axios', (req,res)=>{
//     console.log(req.query);
//     res.send(req.query);
// })


let userId="bae";
let userPw="1234";

app.post('/test2-axios',(req,res)=>{
    console.log('/test2-axios', req.body);
    if(userId ===req.body.userId && req.body.userPw){
        res.send({userInfo: req.body, isSuccess : true})
      } else{
        res.send({isSuccess : false});
      
      }
      
      
      })

















app.listen(9999, ()=>{
    console.log('9999포트 0401 복습')
})