const {generateRectangle} = require("./src/pattern_lib.js");

const main = function() {
  let typeOfRect = process.argv[2]
  let width = +process.argv[3];
  let height = +process.argv[4];
  return generateRectangle(typeOfRect,width,height);
}

console.log(main());
