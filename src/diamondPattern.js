const repeatCharacter = function(character, numberOfTimes) {
  let line = "";
  for(let index = 1; index <= numberOfTimes; index ++) {
    line += character;
  }
  return line;
}

const repeatSpaces = function(numberOfTimes) {
  return repeatCharacter(" ",numberOfTimes);
}

/* Filled Diamond ------------- */
const generateUpperFilledPart = function(height) {
 let upperPart = "";
 let delimiter = "\n";
 let spacesRequired = Math.ceil(height/2);
  for(let index = 1; index <= height; index+=2) {
    upperPart += repeatSpaces( spacesRequired )+ repeatCharacter("*",index); 
    upperPart += delimiter;
    spacesRequired--; 
  }
  return upperPart;
}  

const generateLowerFilledPart = function(height) {
  let lowerPart = "";
  let spacesRequired = 2;
  let delimiter = "\n";
  for( let index = height-2; index >= 1 ; index -= 2 ) {
    lowerPart += repeatSpaces( spacesRequired )+ repeatCharacter("*",index);
    lowerPart += delimiter;
    spacesRequired++; 
  }
  return lowerPart;
}  

const generateDiamond = function(height) {
  let diamond = "";
  let upperPart = generateUpperFilledPart(height);
  let lowerPart = generateLowerFilledPart(height);
  diamond = upperPart + lowerPart; 
  return diamond;
}

/* Filled Diamonnd x--------------*/

const line = function(height) {
  return repeatSpaces(Math.ceil(height/2))+repeatCharacter("*",1);
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
  return topLineOfHollow(height)+delimiter+upperPart;
}  

const generateLowerPart = function(height) {
  let lowerPart = "";
  let spacesRequired = 2;
  let delimiter = "\n";
  let bottomLine = repeatSpaces(Math.ceil(height/2))+repeatCharacter("*",1);
  for(let index = height-4; index >=1 ; index-=2) {
    lowerPart += repeatSpaces( spacesRequired )+ "*"+repeatSpaces(index)+"*";
    lowerPart += delimiter;
    spacesRequired++; 
  }
  return lowerPart+bottomLineOfHollow(height);
}  

const generateHollow = function(height) {
  let hollow = "";
  let delimiter = "\n";
  hollow = generateUpperPart(height) + generateLowerPart(height);
  return hollow;
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
  return upperLineOfAngled(height)+delimiter+upperPart;
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
  return lowerPart+bottomLineOfAngled(height);
}  
 
const generateAngled = function(height) {
  let hollow = "";
  let delimiter = "\n";
  hollow = generateUpperAngledPart(height) + generateLowerAngledPart(height);
  return hollow;
}
/* Angled Diamond x---------------*/

/* Main Function -----------------*/
const diamondPattern = function() {
 let kindOfTriangle = process.argv[2];
 let height = process.argv[3];

 if(kindOfTriangle == "filled") {
   return generateDiamond(height);
 }
 if(kindOfTriangle == "hollow") {
   return generateHollow(height);
 }
 if(kindOfTriangle == "angled") {
   return generateAngled(height);
 }
}
/* Main Function x----------------*/ 

console.log(diamondPattern());
