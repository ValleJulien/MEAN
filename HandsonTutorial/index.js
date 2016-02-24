// Require Node Modules
var util = require('util');

// in order to watch all util method
// console.log(util);


// function greet(what) {
//     util.log('Hello', what + '\n');
// }
// greet('Node');
// greet('NPM');

var greet = require('./greet');
greet('Node');
greet('NPM');