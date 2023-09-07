Array.prototype.push2 = function (newItem) {
  let arrayLength = this.length;
  this[arrayLength] = newItem;
};

var example_array = [1, 2, 3, 4];
example_array.push2(5);
console.log(example_array);
