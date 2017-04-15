'use strict';

// TODO: Initialize your project using NPM to create and populate a package.json file
// We used the following command: npm init -y
// TODO: Require the Express package that you installed via NPM, and instantiate the app
// Remember to install express, and be sure that it's been added to your package.json as a dependency
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// TODO: Include all of the static resources as an argument to app.use()
app.use(express.static(__dirname + '/public'));

//TODO: (STRETCH) Write a new route that will handle a request and send the new.html file back to the user
app.get('*', function(req, res) {
res.sendFile(__dirname + '/public/new.html');
});

app.get('*', function(req, res) {
  // TODO: Using the response object, send the index.html file back to the user
res.sendFile(__dirname + '/public/index.html');
});



// app.get('*', function(req, res) {
//  res.sendfile('/new.html', {root: __dirname })
// });

app.listen(PORT, function() {
  // TODO: Log to the console a message that lets you know which port your server has started on
  //in terminal run 'node server.js' in starter code directory
  console.log(PORT);
});
