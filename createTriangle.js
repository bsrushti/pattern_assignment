const { generateTriangle } = require("./src/pattern_lib.js");
const { createTriangleObject } = require("./src/util_lib.js");

const main = function() {
  let input = process.argv;
  let triangleProperties = createTriangleObject(input);
  return generateTriangle(triangleProperties);
}

console.log(main());

