const ColorManipulator = require("colorly-tools");

const color = new ColorManipulator("#3498db");

console.log(color.toRGB()); // [52, 152, 219]
console.log(color.darken(2)); // Darker shade in HEX
console.log(color.getComplementary()); // Complementary color
