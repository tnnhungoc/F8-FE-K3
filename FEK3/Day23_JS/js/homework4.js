Array.prototype.filter2 = function (condition) {
  var newArray = [];
  this.forEach(function (e) {
    if (condition(e)) {
      newArray.push(e);
    }
  });
  return newArray;
};

var exampleArray = [1, 2, 2, 3, 4];

console.log(exampleArray.filter2((number) => number === 2));
