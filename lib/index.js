'use strict';

var fs = require('fs');

module.exports.parse = function (filename) {
  var contents = fs.readFileSync(filename);

  var title = contents.slice(37, 40).toString();
  var ignore = contents.slice(41, 42);
  var discipline = contents[43];
  var edition = contents[44];
  var last = contents[45];

  var bufInt = (buf.readUInt32BE(47) << 8) + buf.readUInt32BE(51);

  console.log('title: '+title);
  console.log('discipline: '+discipline);
  console.log('edition: '+edition);
  console.log('bufInt: '+bufInt);

  for (var i = 37; i < 60; i++) {
    console.log(i+': '+contents[i]);
  }

  return 'test';
}

var test = 'test';
