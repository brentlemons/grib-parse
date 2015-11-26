'use strict';

var fs = require('fs');

module.exports.parse = function (filename) {
  var contents = fs.readFileSync(filename);

  console.log(contents[0]);
  return 'test';
}

var test = 'test';
