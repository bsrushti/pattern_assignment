const {generateDiamond} = require("./src/pattern_lib.js");

const main = function() {
  let typeOfiamond = process.argv[2];
  let height = +process.argv[3];
  return generateDiamond(typeOfiamond, height); 
}

console.log(main());
