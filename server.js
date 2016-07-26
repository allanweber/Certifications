var express = require('express'),
    http = require('http'),
    bodyParser = require('body-parser'),
    path = require('path');

var app = express();

// config - all environments
app.set('port', process.env.PORT || 3000);
app.set('views',__dirname);
app.engine('html', require('consolidate').handlebars);
app.set('view engine', 'html');
app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// routes
app.get('/', function(req, res){
    res.render('geo.html');
});

app.get('/web', function(req, res){
    res.render('WebStorageAPI.html');
});
// app.get('/test', routes.test);

// configure http server
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});