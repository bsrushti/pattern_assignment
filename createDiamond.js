const {generateDiamond} = require('./src/pattern_lib.js'); 
const {createDiamondObject} = require('./src/util_lib.js');
const main = function() {
  let input = process.argv; 
  let diamondProperties = createDiamondObject(input);
  return generateDiamond(diamondProperties); 
}

console.log(main());
