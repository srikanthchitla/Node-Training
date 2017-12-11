var http = require('http');

var server = http.createServer(function(req, res){
    console.log('The requested URL is: '+ req.url);
    res.writeHead(200, {'content-type':'text/plain'});
    res.end("Node Training");
});

server.listen(3000);
console.log("Server started @ 3000");
