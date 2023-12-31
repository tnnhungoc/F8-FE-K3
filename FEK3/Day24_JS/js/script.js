//Homework 1
function reverse(value) {
  return parseInt(value.toString().split("").reverse().join(""));
}
console.log(reverse(121345));

//Homework 2

function humanize(num) {
  var ones = [
    "",
    "một",
    "hai",
    "ba",
    "bốn",
    "năm",
    "sáu",
    "bảy",
    "tám",
    "chín",
    "mười",
    "mười một",
    "mười hai",
    "mười ba",
    "mười bốn",
    "mười năm",
    "mười sáu",
    "mười bảy",
    "mười tám",
    "mười chín",
  ];
  var tens = [
    "",
    "",
    "hai mươi",
    "ba mươi",
    "bốn mươi",
    "năm mươi",
    "sáu mươi",
    "bảy mươi",
    "tám mươi",
    "chín mươi",
  ];

  var numString = num.toString();

  if (num < 0) throw new Error("Negative numbers are not supported.");

  if (num === 0) return "số không";

  //the case of 1 - 20
  if (num < 20) {
    return ones[num];
  }

  if (numString.length === 2) {
    return tens[numString[0]] + " " + ones[numString[1]];
  }

  //100 and more
  if (numString.length === 3) {
    if (numString[1] === "0" && numString[2] === "0")
      return ones[numString[0]] + " trăm";
    else
      return (
        ones[numString[0]] + " trăm " + humanize(+(numString[1] + numString[2]))
      );
  }

  if (numString.length === 4) {
    var end = +(numString[1] + numString[2] + numString[3]);
    if (end === 0) return ones[numString[0]] + " nghìn";
    if (end < 100) return ones[numString[0]] + " nghìn " + humanize(end);
    return ones[numString[0]] + " nghìn " + humanize(end);
  }
}

console.log(humanize(4298));

//Homework 3
function randomColor() {
  var colorHexa = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + colorHexa;
}

console.log(randomColor());
