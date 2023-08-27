var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

var result = function () {
  if (Array.isArray(arr)) {
    return arr.flat(Infinity);
  } else {
    return "Arr is not a array";
  }
};

console.log(result());
