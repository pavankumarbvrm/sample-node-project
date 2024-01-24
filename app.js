var http = require('http');
var express = require('express');
var morgan = require('morgan');
var fs = require('fs');  // Import the fs module

var app = express();
  
app.set('port', process.env.PORT || 3005);
app.set('views', __dirname + '/app/server/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/app/public'));
// Use morgan middleware to log requests to a file
app.use(morgan('combined', { stream: fs.createWriteStream('/var/log/app.log', { flags: 'a' }) }));

require('./app/routes')(app);
