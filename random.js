var http = require('http'),
	port = 8000;


var words = ['foo', 'bar', 'baz', 'bam'];

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  var i = parseInt(words.length * Math.random());
  var word = words[i];
  response.end(word + "\n");
}).listen(port);

console.log("Server (Int) Running on port " + port);
