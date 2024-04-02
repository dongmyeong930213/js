const express = require('express');
const app = express();
const multer = require('multer');
const path = require('multer');
const upload = multer({
    dest : '/uploads',
})

app.set('view engine','ejs');
app.set('views','./views');
app.use('download', express.static('download'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


const example = multer({
storage: multer.diskStorage({
    destination(req,file,done){
        done(null,'uploads/')
    },
    filename(req,file,done){
        // 한글이름 처리
       file.originalname = Buffer.from(file.originalname,'latin1').toString('utf-8')
        done(null,file.originalname)
    }


})
})



app.get('/',(req,res)=>{
    res.render('form2')
})

app.post('/upload2',example.array('demo'),(req,res)=>{
 console.log('req.file ==>', req.files);
 console.log('여러개 중에 첫번째 파일', req.files[0].filename)
 res.render('result2',{filecount:req.files.length})
})



app.listen(8000,()=>{
    console.log('8000')
})