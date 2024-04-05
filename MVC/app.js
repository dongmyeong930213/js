// views -> model -> controller -> routes 폴더순서 및 생성

const express = require('express')
const app = express();

app.set('view engine','ejs')
app.set('views','./views')

app.use(express.urlencoded({extended:true}));
app.use(express.json());


const indexRouter = require("./routes/index");
app.use("/",indexRouter)

const userRouter = require("./routes/user");
app.use("/user",userRouter)

app.listen(3000,()=>{
    console.log('3000 server')
})