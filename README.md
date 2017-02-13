### Introduction To Node
Learning node by doing, and keeping track of it with github

---
### First Commit
Using the node module `http`, to create a very simple server.
Run `node server.js` to start a server on port 3000.

```

var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain'})
  response.end('Hello World!')
}).listen(3000);

console.log("Server is listening on Port 3000")
```

__and then we committed our code___

`git add -A`

`git commit -m "configured basic server using HTTP"`

`git push origin master`

----
#### Second Commit
We are making our project by adding a `package.json` file.

Run command `npm init` to create the JSON file.

Next, we installed the NPM package `express`

Run commant 'npm install --save express'

*the dash dash save, writes express to our package.json*

1) Imported express and used the constructor to make our app.
2) Defined an endpoint `howdy`, which gives a response of some text.
3) Created a server on PORT 3000

```
var express = require('express');
var app = express();

app.get('/howdy', function(req, res) {
  res.end("We made it!")
});

var server = app.listen(3000, function() {
  console.log('Server 🔥🔥🔥ed up on PORT 3000')
});
```
Then we committed our code:

`git add -A`

`git commit -m "Add package.json, user express to configure our server"`

`git push origin master`

----
#### Third commit
Up until now we have had to kill our server, and restart our server to see our new changes in our code. We can use a tool called `nodemon`, that will make this process much easier.

`sudo npm install - g nodemon`

*the dash g flag tells NPM to install nodemon globally on our computer. Meaning it is not specific to this project. When we install things globally, it is a pretty big deal, we need to prefix the command with sudo*

Now we can start our server with `nodemon` and our server will automatically restart every time we save our codebase.

`nodemon server.js`


1) Make two new endpoints, one that serves a sad response, and one that serves a happy response
```
app.get('/sad', function(req, res) {
  res.end("I did not go skiing last weekend")
});

app.get('/happy', function(req, res) {
  res.end("I am going skiing this weekend!")
});
```

2) Commit your code. *we will no longer detail the steps for a commit*

3) Push changes to Github
