const repeatCharacters = function(character, numberOfTimes){
  let characters = "";
  for(let index = 1; index <= numberOfTimes; index++) {
    characters += character;
  }
  return characters;
}

const repeatSpaces = function(numberOfTimes) {
 return repeatCharacters(" ",numberOfTimes);
}

const repeatStars = function(numberOfTimes) {
 return repeatCharacters("*",numberOfTimes);
}

const repeatHyphen = function(numberOfTimes) {
 return repeatCharacters("-",numberOfTimes);
}

const generateFilledRectangle = function(width,height) {
  let filledRectangle = "";
  let delimiter = "\n";
  for(let rowIndex = 0; rowIndex < height; rowIndex++) {
    filledRectangle += repeatStars(width);
    filledRectangle = filledRectangle + delimiter;
  }
  return filledRectangle;
}

const generateLine = function(width, character) {
  let line = "";
  for(index = 1; index <= width; index++) {
    line += character;
  }
  return line;
}

const middlePartOfEmptyRectangle = function(width,height) {
  let middlePart = "";
  let delimiter = "\n";
  for(index = 1; index <= height; index++) {
    middlePart += "*" + repeatSpaces(width) + "*" + delimiter;
  }
  return middlePart;
}

const generateEmptyRectangle = function(width,height) {
  let emptyRectangle = "";
  let delimiter = "\n";
  let line = generateLine(width,"*") + delimiter;
  let middleLines =  middlePartOfEmptyRectangle(width-2,height-2);  
  emptyRectangle = line + middleLines + line;
  return emptyRectangle;
}
const generateAlternatingRectangle = function(width,height) {
  let alternatingRectangle = "";
  let delimiter = "\n";
  for(let rowIndex = 0; rowIndex < Math.ceil(height/2); rowIndex++) {
    alternatingRectangle += repeatStars(width);  
    alternatingRectangle += delimiter;
    alternatingRectangle += repeatHyphen(width);
    alternatingRectangle += delimiter;
  }
  return alternatingRectangle;
}

const rectanglePattern = function(typeOfRect,width,height) {
  let outputPattern; 
  if(typeOfRect == "filled") {
    outputPattern = generateFilledRectangle(width,height);
  }
  if(typeOfRect == "empty") {
    outputPattern = generateEmptyRectangle(width,height);
  }
  if(typeOfRect == "alternating") {
  outputPattern = generateAlternatingRectangle(width,height);
 }
  return outputPattern;
}

const main = function() {
  let typeOfRect = process.argv[2]
  let width = +process.argv[3];
  let height = +process.argv[4];
  return rectanglePattern(typeOfRect,width,height);
}

console.log(main());
//exports.repeatSpaces=repeatCharacters;
