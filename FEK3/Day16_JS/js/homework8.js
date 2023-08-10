var n = 3;

var arr = Array.from({ length: n }, (x, i) => 1 / (i + 1));
console.log(arr);

function add(total, arrayItem) {
  return total + arrayItem;
}

var s = arr.reduce(add);

console.log(s);
