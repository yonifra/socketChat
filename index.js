var app = require('express')();
var http = require('http').createServer(app);
const port = 3002;

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});