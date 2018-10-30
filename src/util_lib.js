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
    return firstChar+repeatSpaces(length-2)+secondChar;
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

const middlePartOfHollowRectangle = function(height, width) {
  let elementArray = new Array(height).fill(width);
  return elementArray.map(generateHollowLine("*","*")).join("\n");
};
<<<<<<< HEAD

const createJustifiedLineWithOneStar = function(height) {
  let spaces = repeatSpaces(Math.floor(height/2));
  return spaces + repeatStars(1) + spaces;
};

const middlePartOfUpperHalfDiamond = function(height, firstChar, secondChar) {
  let middlePart = [];
  let length = 3;
  height = Math.floor(height/2)-1;
  for(let index = 1; index <= height; index++) {
    let hollowLine = generateHollowLine(firstChar,secondChar);
    let stars = hollowLine(length);
    let spaces = repeatSpaces(height+1-index);
    length += 2;
    middlePart.push(spaces + stars + spaces); 
  }
  return "\n"+middlePart.join("\n");
}
=======
>>>>>>> e989b244a7d37edb17d5b0943b2c9f3ce1d72317

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
  createAlternateLine,
  middlePartOfHollowRectangle,
  createJustifiedLineWithOneStar,
  middlePartOfUpperHalfDiamond
};

