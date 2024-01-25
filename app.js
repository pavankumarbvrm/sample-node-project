/*

GEREKLİ PAKETLER YÜKLENİYOR...

*/
var http = require('http');
var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3005); // GİRİŞ PORTU AYARLANDI
app.set('views', __dirname + '/app/server/views'); // VIEW KLASÖRÜ TANITILDI
app.set('view engine', 'ejs'); // VIEW ENGINE AYARLANDI
app.use(express.static(__dirname + '/app/public')); // KULLANICILAR TARAFINDAN ERİŞİLEBİLEN KLASÖR TANIMLANDI

require('./app/routes')(app); // ROUTE DOSYASI ÇAĞIRILDI

/*

HTTP SERVER OLUŞTURULDU

*/
http.createServer(app).listen(app.get('port'), function(){
    console.log('Sistem ' + app.get('port') + ' Portu Üzerinde Çalışıyor.');
});

// Add support for port 4005
http.createServer(app).listen(4005, function(){
    console.log('Sistem 4005 Portu Üzerinde Çalışıyor.');
});
