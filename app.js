// prepare web server for serving our status page
var fs = require('fs');
var page = fs.readFileSync('./index.html');
var server = require('http').createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(page);
  response.end();
});

server.listen(6678);
console.log("Server running at http://127.0.0.1:6678");

// socket status emiter
var io = require('socket.io').listen(6677);


io.sockets.on('connection', function (socket) {
	console.log('someone connected');
});

var updateClients = function() {
	console.log('x');
}

setInterval(updateClients, 3000);

