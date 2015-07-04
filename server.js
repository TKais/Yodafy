var express = require('express');
var app = express();
var unirest = require('unirest');
var qs = require('querystring');





function startServer(){
  var server = app.listen(8080, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Yodafy listening at http://%s:%s', host, port);
  });
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
    var encodeSentence = encodeURIComponent(sentence);

    unirest.get("https://yoda.p.mashape.com/yoda?sentence=" + encodeSentence)
    .header("X-Mashape-Key", "")
    .header("Accept", "text/plain")
    .end(function (result) {
      if(result.status !== 200){
        console.log("The status code from the API is: " + result.status);
        return console.log("Something went wrong! Try again later");
      } else {
      console.log(result.status, result.headers, result.body);
      console.log(result.body);
      res.render('yodafied', {sentence: result.body});
      }
    })
  })
});


startServer();
