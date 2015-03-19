var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(request, response){
  response.render('index')
});

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;