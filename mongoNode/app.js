//Refer mongojs
var mongojs = require('mongojs');
var db = mongojs('project1', ['users']); // database and collection

db.users.insert({
  name: 'stephane2',
  age: 'too old'
}, function(err, data) {
  console.log(err || data);
});

db.users.find({
    name: 'stephane2'
  }, function(err, data) {
    console.log(err || data);
});

db.users.update({
    name: 'stephane2'
}, {
    $set:
        {age: 'You know he\'s too old for you!!'}
    }, function(err, data) {
    console.log(err || data);
});

// db.users.remove(function(err, data) {
//     console.log(err || data);
// });
