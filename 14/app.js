const express = require('express')
const app = express();

app.set('view engine','ejs');
app.set('views' ,'./views');
app.use(express.static('public'))

app.get('/', (req,res)=>{
  res.render('index',{title:'My Home'})
})

app.get('/about', (req,res)=>{
  res.render('about',{title:'My About'})
})

app.get('/create', (req,res)=>{
  res.render('create',{title:'My Create'})
})

app.use((req,res)=>{
  res.status(404).render('404')
})

app.listen(3000, ()=>{
  console.log('3000실행중')
})