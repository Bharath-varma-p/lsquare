// http is the inbuild module 
var http = require('http');




// with this we can create an server  
// http is the protocal for requesting resources
var server = http.createServer(function(req,res){

});

server.listen(3000);
console.log("The server is running at 3000")