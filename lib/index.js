'use strict';

var fs = require('fs');

module.exports.parse = function (filename) {
  var contents = fs.readFileSync(filename);

  var title = contents.slice(37, 40);
  var ignore = contents.slice(41, 42);
  var discipline = contents[43];
  var edition = contents[44];

  console.log('title: '+title);
  console.log('discipline: '+discipline);
  console.log('edition: '+edition);
  return 'test';
}

var test = 'test';
