const http = require('http')
// http.createServer().listen(8080,function(){
//     console.log('8080포트에서 서버 실행')
// })
const server = http.createServer();
server.listen(8080, function(){
    console.log('8080포트에서 서버 실행')
})




// const http = require('http')

// const server = http.createServer();
// server.listen(3000, function(){
//     console.log('3000포트에서 서버 실행')
// })