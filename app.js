var express = require('express');
var app = express();
var unirest = require('unirest');


var server = app.listen(8080, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('Yodafy listening at http://%s:%s', host, port);

});


function callAPI(){
  unirest.get("https://yoda.p.mashape.com/yoda?sentence=You+will+learn+how+to+speak+like+me+someday.++Oh+wait.")
    .header("X-Mashape-Key", "")
    .header("Accept", "text/plain")
    .end(function (result) {
      console.log(result.status, result.headers, result.body);
      var newBody = result.body;
      doSomething(newBody);
  })
};

function doSomething(newBody){
  console.log(newBody);
}

callAPI();

