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
    this.encodedSentence();
  },

  encodedSentence: function(){
    var sentence = "Yo it's Tiff and I'm doing cool"
    var encodeSentence = encodeURIComponent(sentence);
    this.callAPI(encodeSentence);
  },

  callAPI: function(encodeSentence){ 
    unirest.get("https://yoda.p.mashape.com/yoda?sentence=" + encodeSentence)
      .header("X-Mashape-Key", "")
      .header("Accept", "text/plain")
      .end(function (result) {
        if(result.status !== 200){
          return console.log("Something went wrong! Try again later");
        } else {
        console.log(result.status, result.headers, result.body);
        var newBody = result.body;
        //pass newBody back to function in app.js to append it to DOM
      }
    })
  }
}






