// S= 1*2 + 2*3 + 3*4 + ... + n*(n+1);

function sum(n) {
  var sum = 0;

  for (var i = 1; i <= n; i++) {
    sum = sum + n * (n + 1);
  }

  return sum;
}

console.log(sum(3));
