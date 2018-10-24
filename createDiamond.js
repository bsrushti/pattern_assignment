const {generateDiamond} = require("./src/pattern_lib.js");
/* Main Function -----------------*/

const main = function() {
  let typeOfiamond = process.argv[2];
  let height = process.argv[3];
  return generateDiamond(typeOfiamond, height); 
}

/* Main Function x----------------*/ 

console.log(main());
