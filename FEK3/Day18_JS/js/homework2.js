var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// check prime number
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

//average of prime numbers
function average(nums) {
  var sum = 0;
  var count = 0;

  for (var i = 0; i < nums.length; i++) {
    if (isPrime(nums[i])) {
      sum += nums[i];
      count++;
    }
  }

  return sum / count;
}

var primes = numbers.filter(isPrime);

if (primes.length > 0) {
  console.log("Average of prime numbers: " + average(numbers));
} else {
  console.log("No prime numbers");
}
