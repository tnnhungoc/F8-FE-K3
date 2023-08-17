var numbers = [-1, 50, 25, 1, 10, 0, 100, -3];

var element = 4;

numbers.push(element);
numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers);
