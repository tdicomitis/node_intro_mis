var express = require('express');
var app = express();
var bodyParser = require ('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index', { name: "Taryn" });
});

app.get('/about', function(req, res){
  res.render('index2')
});

var hobbies = ["skiing", "hiking", "skyrim", "eating"];

app.get('/about-me', function(req, res){
  res.render('about', { data: hobbies })
});


var server = app.listen(3000, function() {
  console.log('Server 🔥🔥🔥ed up on PORT 3000')
});
