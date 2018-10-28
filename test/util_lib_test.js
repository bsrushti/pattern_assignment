const assert = require('assert');
const lib = require('../src/util_lib.js'); 
const {repeatCharacters} = lib;
const {repeatStars} = lib;
const {repeatHyphen} = lib;
const {repeatSpaces} = lib;

//========repeatCharacters=======

assert.equal(repeatCharacters("*",2),"**");
assert.equal(repeatCharacters("$",4),"$$$$");
assert.equal(repeatCharacters("#",8),"########");
assert.equal(repeatCharacters("-",12),"------------");


//========repeatStars========

assert.equal(repeatStars(2),"**");
assert.equal(repeatStars(4),"****");
assert.equal(repeatStars(8),"********");
assert.equal(repeatStars(12),"************");

//========repeatSpaces========

assert.equal(repeatSpaces(2),"  ");
assert.equal(repeatSpaces(4),"    ");
assert.equal(repeatSpaces(8),"        ");
assert.equal(repeatSpaces(12),"            ");

//========repeatHyphen========

assert.equal(repeatHyphen(2),"--");
assert.equal(repeatHyphen(4),"----");
assert.equal(repeatHyphen(8),"--------");
assert.equal(repeatHyphen(12),"------------");

