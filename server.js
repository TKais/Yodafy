var express = require('express');
var app = express();
var unirest = require('unirest');
var qs = require('querystring');


module.exports = {


  startServer: function(){
    var server = app.listen(8080, function(){
      var host = server.address().address;
      var port = server.address().port;

      console.log('Yodafy listening at http://%s:%s', host, port);
    });
  }
}



app.set("views", __dirname + "/views");
app.set("view engine", "jade");


app.get('/', function(req, res){
  res.render("index");
})

app.post('/', function(req, res){
  var body = '';
  req.on('data', function(data){
    body += data;
  });
  req.on('end', function(){
    var parseIt = qs.parse(body);
    var sentence = parseIt.sentence;
    // encodedSentence(sentence);
  });
  // res.redirect("yodafied");
})
