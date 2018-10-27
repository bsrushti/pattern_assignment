const createObject = function(inputArray) {
  return {
    type : inputArray[2],
    height : inputArray[3],
    width : inputArray[4],
  }
}

const createDiamondObject = function(inputArray) {
  return createObject(inputArray); 
}

const createTriangleObject = function(inputArray) {
  return createObject(inputArray); 
} 

const createRectangleObject = function(inputArray) {
  return createObject(inputArray); 
} 

const repeatCharacters = function(character, numberOfTimes) {
  let line = "";
  for(let index = 0; index < numberOfTimes; index++) {
    line = line + character;
  }
  return line;
}

const repeatStars = function(numberOfTimes) {
  return repeatCharacters("*",numberOfTimes);
}

const repeatHyphen = function(numberOfTimes) {
  return repeatCharacters("-",numberOfTimes);
}

const repeatSpaces = function(numberOfTimes) {
  return repeatCharacters(" ",numberOfTimes);
}

module.exports={
  repeatCharacters,
  repeatStars,
  repeatSpaces,
  repeatHyphen,
  createDiamondObject,
  createTriangleObject,
  createRectangleObject
};

