const createObject = function(inputArray) {
  return {
    type : inputArray[2],
    height : +inputArray[3],
    width : +inputArray[4],
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
  return new Array(numberOfTimes).fill(character).join("");
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

const generateHollowLine = function(firstChar, secondChar) {
  return function(length) {
    return firstChar+repeatSpaces(length)+secondChar;
  }
}

const createAlternateLine = function() {
  let toggle = 0;
  return function(length) {
    toggle = !toggle;
    if(toggle) {
      return repeatStars(length);
    }
    return repeatHyphen(length);
  }
};

module.exports={
  repeatCharacters,
  repeatStars,
  repeatSpaces,
  repeatHyphen,
  createObject,
  createDiamondObject,
  createTriangleObject,
  createRectangleObject,
  generateHollowLine,
  createAlternateLine
};

