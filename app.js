// web server for serving our status page
var fs = require('fs');
var handler = function (request, response) {
	// async read per request for easier development, should be changed to single read and content cache later on
	fs.readFile('./index.html', function(error, content) {
		if (error) {
			throw error;
		}
		response.writeHead(200, { 'Content-Type': 'text/html' });
		response.end(content, 'utf-8');
    });
}

require('http').createServer(handler).listen(6678);
console.log("Server running at http://localhost:6678");

// status emiter
var io = require('socket.io').listen(6677);
console.log("Status emiter running at http://localhost:6677")

var randomBoolean = function() {
	return Math.random() < 0.5 ? true : false;
};

var updateClients = function() {
	var fooVal = randomBoolean();
	var barVal = randomBoolean();
	io.sockets.emit("data", {foo: fooVal, bar: barVal});
}

setInterval(updateClients, 3000);

