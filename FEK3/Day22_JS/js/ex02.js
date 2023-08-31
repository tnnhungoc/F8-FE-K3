let numbers = [1, 1, 3];

Array.prototype.reduce2 = function () {
  let runningTotal = 0;
  this.forEach((e) => {
    runningTotal = runningTotal + e;
  });
  return runningTotal;
};

var total = numbers.reduce2();
console.log(total);
