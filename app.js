var http = require('http');
var express = require('express');
var morgan = require('morgan');
var fs = require('fs');

var app = express();

app.set('port', process.env.PORT || 3005);
app.set('views', __dirname + '/app/server/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/app/public'));

// Use morgan middleware to log requests to a file
app.use(morgan('combined', { stream: fs.createWriteStream('/var/log/app.log', { flags: 'a' }) }));

// Existing route for port 3005
app.get('/', function(req, res) {
    res.send('Old Output on Port 3005');
});

// New route for port 3006
app.get('/hello', function(req, res) {
    res.send('Hello, World! on Port 3006');
});

http.createServer(app).listen(app.get('port'), function(){
    console.log('Server is running on port ' + app.get('port'));
});
