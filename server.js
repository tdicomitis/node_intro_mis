var express = require('express');
var app = express();

app.get('/howdy', function(req, res) {
  res.end("We made it!")
});

app.get('/sad', function(req, res) {
  res.end("I did not go skiing last weekend")
});

app.get('/happy', function(req, res) {
  res.end("I am going skiing this weekend!")
});

var server = app.listen(3000, function() {
  console.log('Server 🔥🔥🔥ed up on PORT 3000')
});
