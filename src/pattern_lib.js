const lib = require('./util_lib.js'); 
const {repeatStars} = lib; 
const {repeatHyphen} = lib; 
const {repeatSpaces} = lib; 
const {repeatCharacters} = lib; 
const {generateHollowLine} = lib;
const {createAlternateLine} = lib;
const {middlePartOfHollowRectangle} = lib;
const {createJustifiedLineWithOneStar} = lib;
const {middlePartOfUpperHalfDiamond} = lib;
const {createMiddleLine} = lib;

const generateFilledRectangle = function(height, width) {
  return new Array(height).fill(width).map(repeatStars).join("\n");
}

const generateHollowRectangle = function(height, width) {
  let delimiter = "\n";
  let line = repeatStars(width);
  let middlePart = "";
  if(height > 2) {
    middlePart = delimiter;
    middlePart += middlePartOfHollowRectangle(height-2, width); 
  }
  return line + middlePart + delimiter + line;
}

const generateAlternatingRectangle = function(height, width) {
  let elementArray = new Array(height).fill(width);
  return elementArray.map(createAlternateLine(width)).join("\n");
}

const generateRectangle = function(rectangleProperties) {
  let {type, height, width} = rectangleProperties;
  rectangleProperties['filled'] = generateFilledRectangle(height, width);
  rectangleProperties['hollow'] = generateHollowRectangle(height, width);
  rectangleProperties['alternate'] = generateAlternatingRectangle(height, width);
  return rectangleProperties[type];
}

const generateLeftTriangle = function(height) {
  let leftTriangle = [];
  for(let rowIndex = 1; rowIndex <= height; rowIndex++) {
    leftTriangle.push(repeatStars(rowIndex)+repeatSpaces(height-rowIndex));
  }
  return leftTriangle.join("\n");
}

const generateRightTriangle = function(height) {
  let rightTriangle = generateLeftTriangle(height).split("\n");
  for(let rowIndex = 1; rowIndex <= height; rowIndex++) {
    let triangleRow = rightTriangle.shift().split("").reverse().join("");
    rightTriangle.push(triangleRow);
  }
  return rightTriangle.join("\n");
}

const generateTriangle = function(triangleProperties) {
  let {type, height} = triangleProperties;
  triangleProperties['left'] = generateLeftTriangle(height);
  triangleProperties['right'] = generateRightTriangle(height);
  return triangleProperties[type];
}

const generateFilledDiamond = function(height) {
  let filledDiamond = [];
  for(let index = 1-height; index < height; index+=2) {
    let absolute = Math.abs(index); 
    let stars = repeatStars(height-absolute);  
    let spaces = repeatSpaces(absolute/2);
    filledDiamond.push(spaces + stars + spaces);
  }
  return filledDiamond.join("\n");
}  

const generateHollowDiamond = function(height) {
  if(height <= 2) {return "*";}
  let upperHalf = generateUpperHalf(height, "*", "*"); 
  let middleLine = createMiddleLine(height);
  let lowerHalf = generateLowerHalf(height, "*", "*");  
  return upperHalf+middleLine+lowerHalf;
}  

const generateUpperHalf = function(height, firstChar, secondChar) {
  let topLine = createJustifiedLineWithOneStar(height);
  let middlePart = middlePartOfUpperHalfDiamond(height,firstChar,secondChar);
  return topLine+middlePart;
}

const generateLowerHalf = function(height, firstChar, secondChar) {
  let lowerPart = generateUpperHalf(height,firstChar,secondChar).split("\n");
  return lowerPart.reverse().join("\n");
}

const generateAngledDiamond = function(height) {
  if(height <= 2) {return "*";}
  let upperHalf = generateUpperHalf(height, "/", "\\"); 
  let middleLine = createMiddleLine(height); 
  let lowerHalf = generateLowerHalf(height, "\\", "/");  
  return upperHalf+middleLine+lowerHalf;
}

const generateDiamond = function(diamondProperties) {
  let {type, height} = diamondProperties;
  diamondProperties['filled'] = generateFilledDiamond(height);
  diamondProperties['angled'] = generateAngledDiamond(height);
  diamondProperties['hollow'] = generateHollowDiamond(height);
  return diamondProperties[type];
}

exports.generateRectangle = generateRectangle;
exports.generateTriangle = generateTriangle;
exports.generateDiamond = generateDiamond;






