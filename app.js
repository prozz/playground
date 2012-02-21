// web server for serving our status page
var fs = require('fs');
var page = fs.readFileSync('./index.html');

var handler = function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(page);
  response.end();
}

require('http').createServer(handler).listen(6678);
console.log("Server running at http://localhost:6678");

// status emiter
var io = require('socket.io').listen(6677);
console.log("Status emiter running at http://localhost:6677")

var updateClients = function() {
	io.sockets.emit("data", {x:"y"});
}

setInterval(updateClients, 3000);

