// Require Node Modules
// var util = require('util');

// in order to watch all util method
// console.log(util);

// Using util methods
// function greet(what) {
//     util.log('Hello', what + '\n');
// }
// greet('Node');
// greet('NPM');

// Require Local Modules, anonymous fucntion named by a var
var greet = require('./greet');
greet('Node');
greet('NPM');