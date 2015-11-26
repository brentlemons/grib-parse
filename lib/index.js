'use strict';

var fs = require('fs');

module.exports.parse = function (filename) {
  var contents = fs.readFileSync(filename);

  var title = contents.slice(37, 40).toString();
  var ignore = contents.slice(41, 42);
  var discipline = contents[43];
  var edition = contents[44];
  var last = contents[45];

  var bufInt = (contents.readUInt32BE(47) << 8) + contents.readUInt32BE(51);
  var section1_length = contents.readUInt32BE(55);
  var section1_title = contents.readInt8(59);
  var section1_orig_center = contents.readUInt16BE(60);
  var section1_orig_subcenter = contents.readUInt16BE(62);
  var section1_year = contents.readUInt16BE(66);

  console.log('title: '+title);
  console.log('discipline: '+discipline);
  console.log('edition: '+edition);
  console.log('bufInt: '+bufInt);
  console.log('length: '+section1_length);
  console.log('title: '+section1_title);
  console.log('orig_center: '+section1_orig_center);
  console.log('orig_subcenter: '+section1_orig_subcenter);
  console.log('year: '+section1_year);

  for (var i = 37; i < 60; i++) {
    console.log(i+': '+contents[i]);
  }

  return 'test';
}

var test = 'test';
