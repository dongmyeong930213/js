const express = require('express')
const app = express();

app.set('view engine','ejs')
app.set('views','./views')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const indexRouter = require('./routes/index');
app.use('/', indexRouter)

const userRouter = require('./routes/user');
app.use('/user', userRouter)

app.use("*", (req,res)=>{
    res.status(404).render('404')
})

app.listen(9999, ()=>{
    console.log('9999 실행중')
})
