const http = require('http')
const server = http.createServer(function(req, res){
res.writeHead 200 ;
var _url = req.url;
res.write(`<h1>hello </h1>`) ;
res.end(`<p>End ~~~ </p>`)
})

server.listen(8000, function(){
    console.log('8000포트 열림')
})