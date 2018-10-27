const {generateRectangle} = require("./src/pattern_lib.js");
const {createRectangleObject} = require("./src/util_lib.js");

const main = function() {
  let input = process.argv;
  let rectangleProperties = createRectangleObject(input);
  return generateRectangle(rectangleProperties);
}

console.log(main());
