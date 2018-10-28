const lib = require('./util_lib.js'); 
const {repeatCharacters} = lib; 
const {repeatStars} = lib; 
const {repeatHyphen} = lib; 
const {repeatSpaces} = lib; 
const {generateHollowLine} = lib;
const {createAlternateLine} = lib;

//---------Rectangle-------//

const generateFilledRectangle = function(height, width) {
  return new Array(height).fill(width).map(repeatStars).join("\n");
}

const middlePartOfHollowRectangle = function(height, width) {
  let elementArray = new Array(height).fill(width);
  return elementArray.map(generateHollowLine("*")).join("\n");
}

const generateHollowRectangle = function(height, width) {
  let delimiter = "\n";
  let line = repeatStars(width);
  let middlePart = "";
  if(height > 2) {
    middlePart = delimiter + middlePartOfHollowRectangle(height-2, width-2); 
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


//--------------

//---------Triangle-------//

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


//------------

//---------Diamond-------//

/* Filled Diamond ------------- */
const generateFilledDiamond = function(height) {
  let filledDiamond = [];
  for(let index = 1-height; index < height; index+=2) {
    let absolute = Math.abs(index); 
    let stars = repeatStars(height-absolute);  
    filledDiamond.push(repeatSpaces(absolute/2) + stars);
  }
  return filledDiamond.join("\n");
}  

/* Filled Diamonnd x--------------*/

const line = function(height) {
  return repeatSpaces(Math.ceil(height/2)) + repeatCharacters("*",1);
}

/* Hollow Diamond ----------------*/ 

const topLineOfHollow = function(height) {
 return line(height); 
}

const bottomLineOfHollow = function(height) {
 return line(height); 
}

const generateUpperPart = function(height) {
 let upperPart = "";
 let delimiter = "\n";
 let spacesRequired = Math.ceil(height/2);
  for(let index = 1; index <= height-2; index+=2) {
    spacesRequired--; 
    upperPart += repeatSpaces( spacesRequired )+ "*"+repeatSpaces(index)+"*";
    upperPart += delimiter;
  }
  return topLineOfHollow(height) + delimiter + upperPart;
}  

const generateLowerPart = function(height) {
  let lowerPart = "";
  let spacesRequired = 2;
  let delimiter = "\n";
  let bottomLine = repeatSpaces(Math.ceil(height/2))+repeatCharacters("*",1);
  for(let index = height-4; index >=1; index-=2) {
    lowerPart += repeatSpaces( spacesRequired )+ "*"+repeatSpaces(index)+"*";
    lowerPart += delimiter;
    spacesRequired++; 
  }
  return lowerPart + bottomLineOfHollow(height);
}  

const generateHollowDiamond = function(height) {
  return generateUpperPart(height) + generateLowerPart(height);
}

/* Hollow Diamond x----------------*/

/* Angled Hollow Diamond ---------*/

const upperLineOfAngled = function(height) {
 return line(height); 
}

const bottomLineOfAngled = function(height) {
 return line(height); 
}

const generateUpperAngledPart = function(height) {
  let upperPart = "";
  let delimiter = "\n";
  let spacesRequired = Math.ceil(height/2);
  for(let index = 1; index <= height-4; index+=2) {
    spacesRequired--; 
    upperPart += repeatSpaces( spacesRequired )+ "/"+repeatSpaces(index)+"\\";
    upperPart += delimiter;
  }
  spacesRequired--;
  upperPart += repeatSpaces( spacesRequired )+ "*"+repeatSpaces(height-2)+"*";
  upperPart += delimiter;
  return upperLineOfAngled(height) + delimiter + upperPart;
}  

const generateLowerAngledPart = function(height) {
  let lowerPart = "";
  let spacesRequired = 2;
  let delimiter = "\n";
  for(let index = height - 4; index >= 1; index -= 2) {
    lowerPart += repeatSpaces( spacesRequired )+  "\\"+repeatSpaces(index)+"/";
    lowerPart += delimiter;
    spacesRequired++; 
  }
  return lowerPart + bottomLineOfAngled(height);
}  
 
const generateAngledDiamond = function(height) {
  return generateUpperAngledPart(height) + generateLowerAngledPart(height);
}

/* Angled Diamond x---------------*/

const generateDiamond = function(diamondProperties) {
  let {type, height} = diamondProperties;
  diamondProperties['filled'] = generateFilledDiamond(height);
  diamondProperties['angled'] = generateAngledDiamond(height);
  diamondProperties['hollow'] = generateHollowDiamond(height);
  return diamondProperties[type];
}

//--------------

//============Exports=========//

exports.generateRectangle = generateRectangle;
exports.generateTriangle = generateTriangle;
exports.generateDiamond = generateDiamond;






