// 1️⃣ Import the module
const ColorlyLite = require("colorly-lite");
// 2️⃣ Convert Colors
const color = new ColorlyLite("#ff5733");

console.log(color.color); // { r: 255, g: 87, b: 51 }
console.log(color.toHsl()); // { h: 11, s: 100, l: 60 }
console.log(color.toHex()); // "#ff5733"
// 3️⃣ Manipulate Colors
console.log(color.lighten(20)); // "#ff9985"
console.log(color.darken(20));  // "#992d1a"
console.log(color.saturate(20));// "#ff401a"
console.log(color.desaturate(20));// "#c16857"
// 4️⃣ Generate Color Schemes
console.log(color.getComplementary()); // "#33b3ff"
console.log(color.getAnalogous()); // ["#ff8533", "#ff5733", "#ff3333"]
// 5️⃣ Check Contrast
const white = new ColorlyLite("#ffffff");
console.log(white.contrastWith("#000000")); // 21.0 (Max contrast)
console.log(white.contrastWith("#bbbbbb")); // Low contrast