var http = require('http');
var express = require('express');

var app = express();

var port = process.env.PORT || 3005; // Default to 3005 if PORT is not specified

app.set('port', port);
app.set('views', __dirname + '/app/server/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/app/public'));

require('./app/routes')(app);

// Create an HTTP server instance for the specified port
http.createServer(app).listen(port, function(){
    console.log('Sistem ' + port + ' Portu Üzerinde Çalışıyor.');
});

// Create another HTTP server instance for the optional port (4005)
var anotherPort = 4005;
http.createServer(app).listen(anotherPort, function(){
    console.log('Sistem ' + anotherPort + ' Portu Üzerinde Çalışıyor.');
});
