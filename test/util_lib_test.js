const assert = require('assert');
const lib = require('../src/util_lib.js'); 
const {repeatCharacters} = lib;
const {repeatStars} = lib;
const {repeatHyphen} = lib;
const {repeatSpaces} = lib;
const {createObject} = lib;
const {generateHollowLine} = lib;
const {createAlternateLine} = lib;
const {middlePartOfHollowRectangle} = lib;
const {createJustifiedLineWithOneStar} = lib;
const {middlePartOfUpperHalfDiamond} = lib;
const {createMiddleLine} = lib;
const {generateUpperHalf} = lib;
const {generateLowerHalf} = lib;

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

//========createObject========

assert.deepEqual(createObject([,,"filled",2,2]),{type:"filled", height:2, width: 2});
assert.deepEqual(createObject([,,"hollow",4,5]),{type:"hollow",height:4, width: 5});
assert.deepEqual(createObject([,,"alternate",6,6]),{type:"alternate", height:6, width:6});
assert.deepEqual(createObject([,,"hollow",5,7]),{type:"hollow", height:5, width:7});

//========generateHollowLine========

let hollowLine = generateHollowLine("*","*");
assert.equal(hollowLine(2),"**");
assert.equal(hollowLine(4),"*  *");
assert.equal(hollowLine(8),"*      *");
assert.equal(hollowLine(12),"*          *");

//========createAlternateLine========

let line = createAlternateLine();
assert.equal(line(2),"**");
assert.equal(line(4),"----");
assert.equal(line(8),"********");
assert.equal(line(12),"------------");

//========middlePartOfHollowRectangle========

assert.deepEqual(middlePartOfHollowRectangle(2,2),[ '**', '**' ]);
assert.deepEqual(middlePartOfHollowRectangle(4,2),[ '**', '**', '**', '**' ]);
assert.deepEqual(middlePartOfHollowRectangle(2,3),[ '* *', '* *' ]);
assert.deepEqual(middlePartOfHollowRectangle(3,5),[ '*   *', '*   *', '*   *' ]);

//========createJustifiedLineWithOneStar========

assert.equal(createJustifiedLineWithOneStar(3)," * ");
assert.equal(createJustifiedLineWithOneStar(5),"  *  ");
assert.equal(createJustifiedLineWithOneStar(7),"   *   ");
assert.equal(createJustifiedLineWithOneStar(9),"    *    ");

//========middlePartOfUpperHalfDiamond========

assert.equal(middlePartOfUpperHalfDiamond(3,"*","*"),"\n");
assert.equal(middlePartOfUpperHalfDiamond(5,"*","*"),"\n * * ");
assert.equal(middlePartOfUpperHalfDiamond(7,"*","*"),"\n  * *  \n *   * ");

//========createMiddleLine========

assert.equal(createMiddleLine(5,"*","*"),"\n*   *\n");
assert.equal(createMiddleLine(7,"*","*"),"\n*     *\n");
assert.equal(createMiddleLine(9,"*","*"),"\n*       *\n");

//========generateUpperHalf========

assert.equal(generateUpperHalf(1,"*","*"),"*\n");
assert.equal(generateUpperHalf(3,"*","*")," * \n");
assert.equal(generateUpperHalf(7,"*","*"),"   *   \n  * *  \n *   * ");

assert.equal(generateUpperHalf(1,"/","\\"),"*\n");
assert.equal(generateUpperHalf(3,"/","\\")," * \n");
assert.equal(generateUpperHalf(7,"/","\\"),"   *   \n  / \\  \n /   \\ ");
//========generateLowerHalf========

assert.equal(generateLowerHalf(1,"*","*"),"\n*");
assert.equal(generateLowerHalf(2,"*","*"),"\n * ");
assert.equal(generateLowerHalf(5,"*","*")," * * \n  *  ");

assert.equal(generateLowerHalf(1,"\\","/"),"\n*");
assert.equal(generateLowerHalf(2,"\\","/"),"\n * ");
assert.equal(generateLowerHalf(5,"\\","/")," \\ / \n  *  ");
