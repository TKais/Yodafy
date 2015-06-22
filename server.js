var express = require('express');
var app = express();
var unirest = require('unirest');

module.exports = {


  startServer: function(){
    var server = app.listen(8080, function(){
      var host = server.address().address;
      var port = server.address().port;

      console.log('Yodafy listening at http://%s:%s', host, port);
    });
  }
}

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
})






