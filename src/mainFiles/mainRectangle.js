const {rectanglePattern} = require("../rectanglePattern.js");

const main = function() {
  let typeOfRect = process.argv[2]
  let width = +process.argv[3];
  let height = +process.argv[4];
  return rectanglePattern(typeOfRect,width,height);
}

console.log(main());
