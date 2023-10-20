var http = require('http');

// with this we can create an server  
// http is the protocal for requesting resources
var server = http.createServer(function(req,res){
   if (req.url == '/')
    {
    //response header
    res.writeHead(200, {'Content-Type': 'text/html'});
  //set response content

    res.write('<html><body><p>Hello this Internship Page for ITAC</p></body></html>');
    res.end();
    }
    else if (req.url == '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
  //set response content

    res.write('<html><body><p>Hello this a Conatact page for Interns (ITAC)</p></body></html>');
    res.end();
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<html><body><p>404 Page not Found</p></body></html>');
        res.end();
    }
});
server.listen(3000);
console.log("The server is running at 3000") 