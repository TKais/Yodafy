var server = require('./server.js');

module.exports = {

  getSentence: function(){
    var sentence = "Yo it's Tiff and I'm talkin' like Yoda";
    server.encodedSentence(sentence);
  }
}



server.startServer();

