const express = require('express');
const app = express()
const PORT = 8000;

app.set('view engine','ejs');
app.set('views','./views');



app.get('/', (req,res)=>{
  res.render('index', {titel:'HOME'})
})

app.get('about', (req, res)=>{
  res.render ('about', {title:'about'})
})


app.get('./create', (req, res)=>{
  res.render('create', {title:'작성하기'})
})

app.use((req,res)=>{
  res.status(404) .render('404')
})


app.listen(PORT, ()=>{
  console.log(` Server is running ${PORT}`)
})