const express = require('express');
const app = express();
const multer = require('multer');  //npm install multer
multer({dest : 'filedownload/'});   //업로드 코드


app.set('view engine', 'ejs');
app.set('views','./views');

app.get("/", (req,res)=>{
    // res.send('멀티파일 업로드')
    res.render('index')
})

app.post('/api/upload',upload.single('file'), (req,res)=>{
    res.send('Upload Sucess')
})

app.listen(8000,()=>{
    console.log('8000포트 실행')
})