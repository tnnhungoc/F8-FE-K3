var arr = [
  ["a", 1, true],
  ["b", 2, false],
  [null, undefined, function () {}],
  [[], null, undefined, function () {}],
];

// var arr = [
//   ["a", 1, true],
//   ["b", 2, false],
//   [null, undefined, function () {}],
//   [[], null, undefined, function () {}],
// ];
var result = (function (arr) {
  if (Array.isArray(arr)) {
    var array = arr.flat(Infinity).reduce((acc, item) => {
      var type = typeof item;
      if (!acc[type]) acc[type] = [];
      acc[type].push(item);
      return acc;
    }, []);
    var result = [];
    for (var index in array) result.push(array[index]);
    return result;
  } else return "không phải mảng.";
})(arr);
console.log(result);
