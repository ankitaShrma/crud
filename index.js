//console.log('here from node');
var http = require('http');
var server = http.createServer(function(request,response){
	response.writeHead(200);
	response.write('Hello World');
	response.end();
});

server.listen(8080, function(){
	console.log('running on .....')
});