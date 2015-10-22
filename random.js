var http = require('http'),
	port = 8000;

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end(Math.random() + "\n");
}).listen(port);

console.log("Server Running on port " + port);
