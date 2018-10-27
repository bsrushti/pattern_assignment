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

module.exports={repeatCharacters,repeatStars,repeatSpaces,repeatHyphen};

