const repeatCharacters = function(character, lengthOfLine) {
  let line = "";
  for(let columnIndex = 1; columnIndex <= lengthOfLine; columnIndex ++) {
    line += character;
  }
  return line;
}

const repeatSpaces = function(numberOfTimes) {
  return repeatCharacters(" ",numberOfTimes);
}

const leftTrianglePattern = function(height) {
  let leftTriangle = "";
  let delimiter = "\n"
  for(let rowIndex = 1; rowIndex <= height; rowIndex ++) {
    leftTriangle += repeatCharacters("*",rowIndex) + delimiter;
  }
  return leftTriangle;
}

const rightTrianglePattern = function(height) {
  let lengthOfLine = 0;
  let delimiter = "\n";
  let rightTriangle = "";
  for(let rowIndex = height; rowIndex >=1; rowIndex--) {
    let spaces = repeatSpaces(rowIndex);
    let line = repeatCharacters("*",++lengthOfLine); 
    rightTriangle += spaces + line + delimiter;
  }
  return rightTriangle;
}

const trianglePattern = function() {
  let kindOfTriangle = process.argv[2];
  let height = +process.argv[3];

  if(kindOfTriangle == "right") {
    return rightTrianglePattern(height);
  }
  if(kindOfTriangle == "left") {
    return leftTrianglePattern(height);
  }
}
console.log(trianglePattern());




