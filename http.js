var http = require('http');

var server = http.createServer(function(req, res){
    res.end("Server Started");
});

server.listen(1234,'localhost',function(){
    console.log("server is started port on : 1234");
});
