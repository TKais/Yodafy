var server = require('./server.js');
var unirest = require('unirest');
var jsdom = require("jsdom");
var window = jsdom.jsdom().parentWindow;

encodedSentence = function(sentence){
  var encodeSentence = encodeURIComponent(sentence);
  callAPI(encodeSentence);
}

function callAPI(encodeSentence){
  unirest.get("https://yoda.p.mashape.com/yoda?sentence=" + encodeSentence)
    .header("X-Mashape-Key", "")
    .header("Accept", "text/plain")
    .end(function (result) {
      if(result.status !== 200){
        console.log("The status code from the API is: " + result.status);
        return console.log("Something went wrong! Try again later");
      } else {
      console.log(result.status, result.headers, result.body);
      var newBody = result.body;
      appendToDom(newBody);
      }
    })
  }

function appendToDom(newBody){
  console.log("IN THE DOM=====" + newBody);
  jsdom.jQueryify(window, "http://localhost:8080/", function () {
    var $ = window.$;
    $("body").("<div id='Yodafied'>" + newBody + "</div>");
    console.log($('#Yodafied').html());
  });
}


server.startServer();