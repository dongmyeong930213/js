const express = require('express');
const app = express();

const multer = require('multer');
const path = require('path');
const upload = multer({dest : 'uploads/'})

const uploadDetail = multer({
    storage:multer.diskStorage({
        destination(req,file,done){
            done(null,'uploads/')
        },
        filename(req,file,done){
            const ext=path.extname(file.originalname)
            console.log(path.basename(file.originalname,ext))
            done(null,path.basename(file.originalname,ext) + Date.now() + ext)
        }
    }),
    limits:{
        fileSize : 5*1024*1024
    }
})

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.get('/',(req,res)=>{
    res.render('form4')
})
app.post('/upload/fields', uploadDetail.fields([ { name:'file1' }, {name:'file2'}  ] ),
(req,res)=>{
    res.send(('한번에 한개씩 여러개'))
})

app.post('dynamic', uploadDetail.single('dynamicFile'),(req,res)=>{
    res.send ({file:req.file, title:req.body.title})
})

app.listen(1833, ()=>{
    console.log('1833 실행')
})