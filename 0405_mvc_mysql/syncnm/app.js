const express = require('express')
const app = express();
const mysql = require('mysql2')

app.set('view engine', 'ejs')
app.set('views','./views')

app.get('/',(req,res)=>{
    var sql = 'insert into customer (custid, custname, addr, phone, birth) value (?,?,?,?,?) '
    var values =['peach','홍길동','마포구에 살아요','0101111','2024-04-05']
    res.render('index')
})

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"mysql1",
    database:"record_company"
})

let sql = "select * from customer";
conn.query(sql, function(err,rows,fields){
    if(err) console.log(err.message);
    else {
        console.log('연결성공');
        console.log(rows[0].custname);
        console.log(fields[0]);
        res.status(500).send('Internal Server Error')
    }
})

app.listen(8000,()=>{
    console.log('8000')
})