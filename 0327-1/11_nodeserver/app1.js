const http = require('http')
http.createServer(function(req,res){
// Send http header , http status 상태, Content-Type
res.writeHead 200 , {'Content-Type':'text/html'}
res.end ( `<h2> Hello World </h2>`)
}).listen(3000)