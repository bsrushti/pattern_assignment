const { generateTriangle } = require("./src/pattern_lib.js");


const main = function() {
  let kindOfTriangle = process.argv[2];
  let height = +process.argv[3];
  return generateTriangle(kindOfTriangle,height);
}

console.log(main());

