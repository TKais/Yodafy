var server = require('./server.js');
var unirest = require('unirest');

encodedSentence = function(sentence){
  var encodeSentence = encodeURIComponent(sentence);
  console.log("WE MADE IT HERE " + encodeSentence);
  callAPI(encodeSentence);
}

function callAPI(encodeSentence){ 
  console.log("INSIDE THE API");
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
      //pass newBody back to function in app.js to append it to DOM
      }
    })
  }


server.startServer();