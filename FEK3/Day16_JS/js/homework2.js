var priceOne = 1678;
var priceTwo = 1734;
var priceThree = 2014;
var priceFour = 2536;
var priceFive = 2834;
var priceSix = 2927;
var used = 0;

switch (true) {
  case used === 0:
    toPay = priceOne;
    break;
  case used <= 50:
    toPay = priceOne * used;
    break;

  case used <= 100:
    toPay = priceTwo * used;
    break;
  case used <= 200:
    toPay = priceThree * used;
    break;
  case used <= 300:
    toPay = priceFour * used;
    break;
  case used <= 400:
    toPay = priceFive * used;
    break;

  default:
    toPay = priceSix * used;
    break;
}
console.log("số tiền phải trả là: " + toPay);

// if (used === 0) {
//   toPay = priceOne;
// } else if (used <= 50) {
//   toPay = priceOne * used;
// } else if (used <= 100) {
//   toPay = priceTwo * used;
// } else if (used <= 200) {
//   toPay = priceThree * used;
// } else if (used <= 300) {
//   toPay = priceFour * used;
// } else if (used <= 400) {
//   toPay = priceFive * used;
// } else {
//   toPay = priceSix * used;
// }

// console.log(`số tiền phải trả là :  ${toPay} `);
