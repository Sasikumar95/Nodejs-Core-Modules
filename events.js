

// this request used to handle the respone active

var http = require("http");
var events =require("events");


var EventsEmitter = new events.EventEmitter();

var server = http.createServer(function(req,res){
    EventsEmitter.emit('Someone requested!', 'hello');
    res.end("hello world");
})

EventsEmitter.on('Someone requested!', function(data){
    console.log("A request has been done on the Server !"+data);
});

var server_port=3000;
server.listen(server_port,'localhost', function(){
    console.log("your server started port :"+server_port);
})