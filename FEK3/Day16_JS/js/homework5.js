var n = 4;
var triangle = "";
var count = 1;

// External loop
for (let i = 1; i <= n; i++) {
  // Internal loop
  for (let j = 1; j <= i; j++) {
    triangle += count;
    count++;
  }
  triangle += "\n";
}
console.log(triangle);
