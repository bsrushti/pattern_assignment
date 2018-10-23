const { rightTrianglePattern } = require("../trianglePattern.js");
const { leftTrianglePattern } = require("../trianglePattern.js");


const trianglePattern = function() {
  let kindOfTriangle = process.argv[2];
  let height = +process.argv[3];

  if(kindOfTriangle == "right") {
    return rightTrianglePattern(height);
  }
  if(kindOfTriangle == "left") {
    return leftTrianglePattern(height);
  }
}

console.log(trianglePattern());

