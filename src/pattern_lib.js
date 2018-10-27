const {repeatCharacters} = require('./util_lib.js'); 
const {repeatStars} = require('./util_lib.js'); 
const {repeatHyphen} = require('./util_lib.js'); 
const {repeatSpaces} = require('./util_lib.js'); 

//---------Rectangle-------//

const generateFilledRectangle = function(width,height) {
  let filledRectangle = "";
  let delimiter = "";
  for(let rowIndex = 0; rowIndex < height; rowIndex++) {
    filledRectangle += delimiter + repeatStars(width);
    delimiter = "\n";
  }
  return filledRectangle;
}

const middlePartOfHollowRectangle = function(width,height) {
  let middlePart = "";
  let delimiter = "\n";
  for(let index = 1; index <= height; index++) {
    middlePart += "*" + repeatSpaces(width) + "*" + delimiter;
  }
  return middlePart;
}

const generateHollowRectangle = function(width,height) {
  let delimiter = "\n";
  let line = repeatCharacters("*",width) ;
  let middleLines =  delimiter + middlePartOfHollowRectangle(width-2,height-2);  
  return line + middleLines + line;
}

const generateAlternatingRectangle = function(width,height) {
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

const generateRectangle = function(typeOfRectangle,width,height) {
  let generateRectangle = {};
  generateRectangle.typeOfRectangle = typeOfRectangle;
  generateRectangle.filled = generateFilledRectangle(width,height);
  generateRectangle.alternate = generateAlternatingRectangle(width,height);
  generateRectangle.hollow = generateHollowRectangle(width,height);
  return generateRectangle[typeOfRectangle];
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

const generateTriangle = function(typeOfTriangle, height) {
let generateTriangle = {};
  generateTriangle.typeOfTriangle = typeOfTriangle;
  generateTriangle.left = generateLeftTriangle(height);
  generateTriangle.right = generateRightTriangle(height);
  return generateTriangle[typeOfTriangle];
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
  for( let index = height-2; index >= 1 ; index -= 2 ) {
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
  for(let index = height-4; index >=1 ; index-=2) {
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
  for(let index = height - 4; index >= 1 ; index -= 2) {
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

const generateDiamond = function(typeOfDiamond, height) {
  let generateDiamond = {};
  generateDiamond.typeOfDiamond = typeOfDiamond;
  generateDiamond.filled = generateFilledDiamond(height);
  generateDiamond.angled = generateAngledDiamond(height);
  generateDiamond.hollow = generateHollowDiamond(height);
  return generateDiamond[typeOfDiamond];
}

//--------------

//============Exports=========//

exports.generateRectangle = generateRectangle;
exports.generateTriangle = generateTriangle;
exports.generateDiamond = generateDiamond;






