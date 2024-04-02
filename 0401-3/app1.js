const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const upload = multer({
    dest : 'uploads/',
});

app.set('view engine','ejs');
app.set('views','./views');

const harddisk = multer.diskStorage({
    destination:(req,file,cb)=>{
        console.log('disk storage');
        cb(null,'download')
    },
    filename:(req,file,cb)=>{
        const ext = path.extname(file.originalname)
        cb(null, file.originalname, ext)
    }
})

const example = multer({storage:harddisk})

app.get('/', (req,res)=>{
    res.render('form1')
})

app.post('/upload', example.single('demo'), (req,res)=>{
    
})








app.listen(8000,()=>{
    console.log('8000 사용중')
})