const express = require('express');
const app = express();
const multer = require('multer');
multer({dest : 'download/'});



app.set('view engine' , 'ejs');
app.set('views', './views')

app.get("/", (req,res)=>{
    res.render('index')
})

app.post('/upload', upload.single('demo'),(req,res)=>{
    res.send('upload');
    console.log('req file -->', req.file);
})


app.listen(4186,()=>{
    console.log("4186포트사용")
})