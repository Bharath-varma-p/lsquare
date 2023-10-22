var express = require('express')


var app = express();


app.get('/',function(req,res) {
    //res.send('<html><body><h1>Hello Interns How are you </h1></body></html>')
    res.sendFile(__dirname + '/index.html')
})


app.get('/contact',function(req,res){
    res.send('<html><body><h1>Hai I am in Contact Page</h1></body></html>')
})




//app object includes 4 function get() post() put() delete()... 


var server = app.listen(3000, function(){
    console.log('server is running......at port 3000')

})