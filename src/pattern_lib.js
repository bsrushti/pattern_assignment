const lib = require('./util_lib.js'); 
const {repeatCharacters} = lib; 
const {repeatStars} = lib; 
const {repeatHyphen} = lib; 
const {repeatSpaces} = lib; 
const {generateHollowLine} = lib;

//---------Rectangle-------//

const generateFilledRectangle = function(height, width) {
  return new Array(height).fill(width).map(repeatStars).join("\n");
}

const middlePartOfHollowRectangle = function(height, width) {
  let elementArray = new Array(height).fill(width);
  return elementArray.map(createStarHollowLine).join("\n");
}

const generateHollowRectangle = function(height, width) {
  let line = repeatCharacters("*",width)+"\n";
  let elementArray = new Array(height).fill(width-2);
  let middlePart = elementArray.map(generateHollowLine("*")).join("\n")+"\n";
  return line + middlePart + line;
}

const generateAlternatingRectangle = function(height, width) {
  let alternatingRectangle = "";
  let delimiter = "";
  for(let rowIndex = 0; rowIndex < Math.ceil(height/2); rowIndex++) {
    alternatingRectangle += delimiter;
    delimiter = "\n";
    alternatingRectangle += repeatStars(width);  
    alternatingRectangle += delimiter;
    alternatingRectangle += repeatHyphen(width);
  }
  return alternatingRectangle;
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
  let leftTriangle = "";
  let delimiter = ""
  for(let rowIndex = 1; rowIndex <= height; rowIndex ++) {
    leftTriangle += delimiter + repeatCharacters("*",rowIndex);
    delimiter = "\n";
  }
  return leftTriangle;
}

const generateRightTriangle = function(height) {
  let lengthOfLine = 0;
  let delimiter = "";
  let rightTriangle = "";
  for(let rowIndex = height; rowIndex >=1; rowIndex--) {
    let spaces = repeatSpaces(rowIndex);
    let line = repeatCharacters("*",++lengthOfLine); 
    rightTriangle += delimiter + spaces + line; 
    delimiter = "\n";
  }
  return rightTriangle;
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
const generateUpperFilledPart = function(height) {
 let upperPart = "";
 let delimiter = "\n";
 let spacesRequired = Math.ceil(height/2);
  for(let index = 1; index <= height; index+=2) {
    upperPart += repeatSpaces( spacesRequired )+ repeatCharacters("*",index); 
    upperPart += delimiter;
    spacesRequired--; 
  }
  return upperPart;
}  

const generateLowerFilledPart = function(height) {
  let lowerPart = "";
  let spacesRequired = 2;
  let delimiter = "";
  for( let index = height-2; index >= 1; index -= 2 ) {
    lowerPart += delimiter;
    lowerPart += repeatSpaces( spacesRequired )+ repeatCharacters("*",index);
    spacesRequired++; 
    delimiter = "\n";
  }
  return lowerPart;
}  

const generateFilledDiamond = function(height) {
  let upperPart = generateUpperFilledPart(height);
  let lowerPart = generateLowerFilledPart(height);
  return upperPart + lowerPart; 
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






