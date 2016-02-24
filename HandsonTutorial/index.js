//Require Node Modules
// var util = require('util');

//in order to watch all util method
// console.log(util);

//Using util methods
// function greet(what) {
//     util.log('Hello', what + '\n');
// }
// greet('Node');
// greet('NPM');

//Require Local Modules, anonymous fucntion named by a var
// var greet = require('./greet');
// greet('Node');
// greet('NPM');

//Create an apache server response without the server treat a request
var http = require("http"),
    port = 1881;
    var server = http.createServer(function(request, response) {
      response.writeHeader(200, {
        "Content-Type": "text/plain"
      });
      response.write("Hello HTTP! yo !!!");
      response.end();
    });
server.listen(port);
console.log("Server Running on " + port + ".\nLaunch http://localhost:" + port);