var app = require('express')();
var http = require('http').createServer(app);
const port = 3002;

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

http.listen(port, function(){
    console.log('listening on *:' + port);
});