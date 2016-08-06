/**
 * Created by Rodman on 8/5/2016.
 */
var express = require('express');
var app = express();
var PORT = 3000;
var middleware = require('./middleware');


app.use(middleware.logger);

app.get('/About', middleware.requireAuthentication, function(req, res) {
   res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));


app.listen(PORT, function () {
    console.log('Express server started on port ' + PORT + '!');
});