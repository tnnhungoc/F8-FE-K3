var number = 4;

function primeNumber(n) {
  if (n <= 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}

if (primeNumber(number)) {
  console.log(number + " is prime");
} else {
  console.log(number + " is not prime");
}
