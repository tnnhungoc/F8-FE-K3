var a = 10.5;
var b = -9;
var c = 50;

// if (a > b && a > c) {
//   if (b > c) {
//     console.log(`${c}, ${b},${a}`);
//   } else {
//     console.log(`${b}, ${c},${a}`);
//   }
// } else if (b > a && b > c) {
//   if (a > c) {
//     console.log(`${c}, ${a},${b}`);
//   } else {
//     console.log(`${a}, ${c},${b}`);
//   }
// } else if (c > a && c > b) {
//   if (a > b) {
//     console.log(`${b}, ${a},${c}`);
//   } else {
//     console.log(`${a}, ${b},${c}`);
//   }
// }

// [a, b, c].sort((a, b) => a - b);
var sorted = [a, b, c].sort();
console.log(sorted.toString());
