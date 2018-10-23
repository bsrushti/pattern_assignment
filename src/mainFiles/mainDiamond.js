const {generateDiamond} = require("../diamondPattern.js");
const {generateAngled} = require("../diamondPattern.js");
const {generateHollow} = require("../diamondPattern.js");
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
