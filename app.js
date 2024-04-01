const express= require('express')
const app = express()
const PORT =8000
app.set('view engine' ,'ejs');
app.set('views','./views')


app.use(express.urlencoded({ extended:true}));
app.use(express.json())

app.get('/', (req,res)=>{
  res.render('main')
})

// test1, test2로 이동
app.get('/test1', (req,res)=>{
  res.render('test1')
})


app.get('/test2', (req,res)=>{
  res.render('test2')
})





app.listen(PORT, ()=>{
  console.log(`${PORT} 에서 서버 실행 중`)

})