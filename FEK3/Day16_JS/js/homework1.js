var distance = 1;
var price = 0;

if (distance <= 1) {
  price = 15000;
} else if (distance <= 5) {
  price = 13500 * distance;
} else if (distance > 5) {
  price = 11000 * distance;
}

if (distance > 120) {
  price = price - price * 0.1;
}

console.log("price: " + price);
