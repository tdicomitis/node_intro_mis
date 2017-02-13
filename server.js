var express = require('express');
var app = express();
var bodyParser = require ('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/howdy', function(req, res) {
  res.end("We made it!")
});

app.get('/sad', function(req, res) {
  res.end("I did not go skiing last weekend")
});

app.get('/happy', function(req, res) {
  res.end("I am going skiing this weekend!")
});

app.get('/greeting/:name', function(req, res){
  res.end('nice to meet you ' + req.params.name)
});

app.post('/login', function(req, res){
  var name = req.body.name;
  var password = req.body.password;
  console.log(name, password);
  var user = { name: name, password: password };
  res.json(user);
});

var server = app.listen(3001, function() {
  console.log('Server 🔥🔥🔥ed up on PORT 3001')
});
