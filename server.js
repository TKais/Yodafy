var express = require('express');
var app = express();
var unirest = require('unirest');
var application = require('./app.js');

module.exports = {


  startServer: function(){
    var server = app.listen(8080, function(){
      var host = server.address().address;
      var port = server.address().port;

      console.log('Yodafy listening at http://%s:%s', host, port);
    });
    getSentence();
  },

  encodedSentence: function(sentence){
    var encodeSentence = encodeURIComponent(sentence);
    this.callAPI(encodeSentence);
  },

  callAPI: function(encodeSentence){ 
    unirest.get("https://yoda.p.mashape.com/yoda?sentence=" + encodeSentence)
      .header("X-Mashape-Key", "")
      .header("Accept", "text/plain")
      .end(function (result) {
        console.log(result.status, result.headers, result.body);
        var newBody = result.body;
        //pass newBody back to function in app.js to append it to DOM
      })
  }
}






