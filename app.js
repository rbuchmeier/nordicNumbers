var express = require('express');
var path = require('path');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'src')));

var server = app.listen(app.get('port'), function() {
        var port = server.address().port;
        console.log('Magic happens on port ' + port);
});
