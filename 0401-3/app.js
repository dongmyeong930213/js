const express = require('express');
const app = express();

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.get('/', (req,res)=>{
    console.log('루트에서 접속')
    res.render('index')
})

app.listen(4567, ()=>{
    console.log('4567 서버 사용')
})