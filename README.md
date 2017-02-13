### Introduction To Node
Learning node by doing, and keeping track of it with github

---
### First Commit: HTTP
Using the node module `http`, to create a very simple server.
Run `node server.js` to start a server on port 3000.

```js

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
#### Second Commit: Express
We are making our project by adding a `package.json` file.

Run command `npm init` to create the JSON file.

Next, we installed the NPM package `express`

Run commant 'npm install --save express'

*the dash dash save, writes express to our package.json*

1) Imported express and used the constructor to make our app.
2) Defined an endpoint `howdy`, which gives a response of some text.
3) Created a server on PORT 3000

```js
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
#### Third commit: Nodemon
Up until now we have had to kill our server, and restart our server to see our new changes in our code. We can use a tool called `nodemon`, that will make this process much easier.

`sudo npm install -g nodemon`

*the dash g flag tells NPM to install nodemon globally on our computer. Meaning it is not specific to this project. When we install things globally, it is a pretty big deal, we need to prefix the command with sudo*

Now we can start our server with `nodemon` and our server will automatically restart every time we save our codebase.

`nodemon server.js`


1) Make two new endpoints, one that serves a sad response, and one that serves a happy response
```js
app.get('/sad', function(req, res) {
  res.end("I did not go skiing last weekend")
});

app.get('/happy', function(req, res) {
  res.end("I am going skiing this weekend!")
});
```

2) Commit your code. *we will no longer detail the steps for a commit*

3) Push changes to Github

----
#### Forth Commit: Params
We can create functions that can take a parameter, and do something with that value:
```js
function greeting (name) {
  return "hello " + name
}
```
We have this same ability when we define API endpoints:
```js
app.get('/greeting/:name', function(req, res){
  res.end('nice to meet you ' + req.params.name)
});
```
Add this endpoint to `server.js`, and pass in a value for the name param.

----
#### Fifth Commit: req.body
If you have ever been on a website and filled out a form, when you hit the `submit` button, you are actually submitting data to the server. This data or information, gets submitted to the server in an object called req.body

In the following example, we are going to create an endpoint to simulate a user login form. The information being submitted to the server will be name, and password. aka `req.body.name` && `req.body.password`

but first...

__Postman__ is a tool that enables us to easily test our APIs, for our example if will enable us to test the functionality of a form being submitted, without actually having to create the UI in the form.

1) Create the login API endpoint. This will be a `POST` method since we are sending data to the server.


2) Install and configure `body-parser` (allows our form to submit data)

`npm install --save body-parser`

require it in your `server,js`

`var bodyParser = require('body-parser')`

configure your application to use it:

`app.use(bodyParser,json())`

&&

`app.use(bodyParser.urlencoded({ extended: true}));`

3) Make sure your server is running.

`nodemon server.js`

4) Head to Postman to test your endpoint `localhost:30000/login` (do not forget to select x-www-form-urlencoded)

----
####Sixth Commit: EJS

EJS --> Embedded javascript. Initially we will have node server up `ejs` files that will look exactly like `HTML`. Eventually we will dynamically render variables and data right inside of our HTML, this is why it is called a 'templating engine'

1) Install EJS:
`npm install --save ejs`

2) Tell `server.js` to use ejs:
'app.set('view engine', 'ejs')'

Next we have to create an ejs page (remembering that our ejs page will be roughly equivalent to an html page.) EJS pages are required to live in the `views/` directory.

3) `mkdir views`

4) `touch index.ejs`  --> go and add base HTML to this file.

5) Create a route that servers (renders) our `index.ejs`
```js
app.get('/', function(req, res){
  res.render('index')
});
```
6) Start your server and go to 'localhost:3000' to view your ejs page.

Before you commit, make a second route `about`, that serves an about ejs page

```js
app.get('/about-me, function(req, res'){
  res.render('about')
});
```

----

#### Seventh Commit: Displaying Data With ejs
When we define our endpoint that renders an EJS page, we can optionally give that EJS page access to specific data. Let's do an example:

```js
app.get('/', function(req, res){
  res.render('index', { name: "Taryn" });
});
```

Now our `index.ejs` has access to whatever data is passed in the above route, via the object

To display the data in our ejs, update your `index.ejs`
```HTML
<h1> Welcome <%= name %> </h1>
```

Lets do a more realistic exapmle, where we pass an array full of data to our render method. Then we will loop through this data in our EJS page. Update the  `about` route.

```js
var hobbies = ["skiing", "hiking", "skyrim", "eating"];

app.get('/about-me', function(req, res){
  res.render('about', { data: hobbies })
});
```

We now have access to our array of hobbies in `about.ejs`, lets build a for loop, ejs style, to display this data.

```ejs
<ul>
  <% for(var i = 0; i < data.length; i++) { %>
    <li> <%= data[i]%> </li>
      <%     }     %>
```
