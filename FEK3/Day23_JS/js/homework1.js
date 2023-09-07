function sum(...args) {
  var total = 0;
  args.forEach(function (arg, index) {
    if (typeof arg === "number") {
      total += arg;
    } else {
      total = `error: "${arg}" is not a number`;
      args.length = index + 1;
    }
  });

  return total;
}
console.log(sum("r", 1, 1));
