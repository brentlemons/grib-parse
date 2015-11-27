'use strict';

//var moment = require('moment');

var fs = require('fs');

var length_remaining = 0
var section_0 = {};

var section_1 = {};

var section_2 = {};
var section_3 = {};
var section_4 = {};
var section_5 = {};
var section_6 = {};
var section_7 = {};
var section_8 = {};

var readSection0 = function(buf) {
  var section = {};

  section['discipline'] = buf.readUInt8(45);
  section['edition'] = buf.readUInt8(46);
  section['total_length'] = (buf.readUInt32BE(47) << 8) + buf.readUInt32BE(51);
  return section;
};

var readSection1 = function(buf) {
  var section = {};

  section['length'] = buf.readUInt32BE(55);
  section['id'] = buf.readUInt8(59);
  section['origin_center'] = buf.readUInt16BE(60);
  section['origin_subcenter'] = buf.readUInt16BE(62);
  section['master_version'] = buf.readUInt8(64);
  section['local_version'] = buf.readUInt8(65);
  section['time_significance'] = buf.readUInt8(66);
  var year = buf.readUInt16BE(67);
  var month = buf.readUInt8(69) - 1; //month appears to be zero based
  var day = buf.readUInt8(70);
  var hour = buf.readUInt8(71);
  var minute = buf.readUInt8(72);
  var second = buf.readUInt8(73);
  section['timestamp'] = new Date(year, month, day, hour, minute, second);
  section['production_status'] = buf.readUInt8(74);
  section['data_type'] = buf.readUInt8(75);

  return section;
};

var readSection2 = function(buf) {
  var section = {};

  section['length'] = buf.readUInt32BE(76);
  section['id'] = buf.readUInt8(80);
  section['data'] = buf.slice(81, 81+section.length-1).toString();

  return section;
};

var readSection3 = function(buf) {
  var section = {};

  return section;
};

var readSection4 = function(buf) {
  var section = {};

  return section;
};

var readSection5 = function(buf) {
  var section = {};

  return section;
};

var readSection6 = function(buf) {
  var section = {};

  return section;
};

var readSection7 = function(buf) {
  var section = {};

  return section;
};

module.exports.parse = function (filename) {
  var buf = fs.readFileSync(filename);

  section_0 = readSection0(buf);
  length_remaining = section_0.total_length - 16;
  console.log('section 0: ');
  console.log(section_0);

  section_1 = readSection1(buf);
  length_remaining -= section_1.length;
  console.log('section 1: ');
  console.log(section_1);

  section_2 = readSection2(buf);
  length_remaining -= section_2.length;
  console.log('section 2: ');
  console.log(section_2);

//  for (var i = 37; i < 60; i++) {
//    console.log(i+': '+contents[i]);
//  }

  return 'test';
}

var test = 'test';
