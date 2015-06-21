var server = require('./server.js');

function doSomething(newBody){
  console.log(newBody);
  server.hey(newBody);
}

server.startServer()
server.callAPI();

