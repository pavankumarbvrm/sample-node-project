var http = require('http');
var express = require('express');
var winston = require('winston');
var path = require('path');

var app = express();

// Set up Winston to write logs to a file
const logFilePath = path.join('/var/log', 'application.log');
winston.add(new winston.transports.File({ filename: logFilePath }));

app.set('port', process.env.PORT || 3005);
app.set('views', path.join(__dirname, '/app/server/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/app/public')));

require('./app/routes')(app);

http.createServer(app).listen(app.get('port'), function() {
    console.log('Sistem ' + app.get('port') + ' Portu Üzerinde Çalışıyor.');
    console.log('output from ' + app.get('port') + ' port application');
    winston.info('Sistem ' + app.get('port') + ' Portu Üzerinde Çalışıyor.');  // Log to file
    winston.info('Output from ' + app.get('port') + ' port application');    // Log to file
});

// Log unhandled exceptions to the file
process.on('uncaughtException', (err) => {
    winston.error('Uncaught Exception:', err.message, err);
    process.exit(1);
});

// Log unhandled promise rejections to the file
process.on('unhandledRejection', (reason, promise) => {
    winston.error('Unhandled Rejection:', reason, promise);
});
