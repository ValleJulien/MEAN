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
// var http = require("http"),
//     port = 1881;
//     var server = http.createServer(function(request, response) {
//       response.writeHeader(200, {
//         "Content-Type": "text/plain"
//       });
//       response.write("Hello HTTP! yo!!!");
//       response.end();
//     });
// server.listen(port);
// console.log("Server Running on " + port + ".\nLaunch http://localhost:" + port);

var formidable = require('formidable'),
    http = require('http'),
    util = require('util'),
    port = 3663;

http.createServer(function(req, res) {
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
    // parse a file upload
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));
    });

    return;
  }

  // show a file upload form
  res.writeHead(200, {'content-type': 'text/html'});
  res.end(
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="text" name="title"><br>'+
    '<input type="file" name="upload" multiple="multiple"><br>'+
    '<input type="submit" value="Upload">'+
    '</form>'
  );
}).listen(port);

console.log("Server Running on " + port + ".\nLaunch http://localhost:" + port);