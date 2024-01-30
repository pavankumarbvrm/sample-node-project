var http = require('http');
var express = require('express');
var winston = require('winston');

var app = express();

// Configure Winston to write logs to a file in /var/log/myapp
winston.add(new winston.transports.File({ filename: '/var/log/myapp/app.log' }));

app.set('port', process.env.PORT || 4005);
app.set('views', __dirname + '/app/server/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/app/public'));

require('./app/routes')(app);

http.createServer(app).listen(app.get('port'), function(){
    console.log('output from ' + app.get('port') + ' port application');
    winston.info('Application started on port ' + app.get('port'));
});
