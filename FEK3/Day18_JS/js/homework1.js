var numbers = [2, 40, 7, 15, 80, 0, -5, 9];

var maxValue = Math.max(...numbers);
var maxValueIndex = numbers.indexOf(maxValue);

var minValue = Math.min(...numbers);
var minValueIndex = numbers.indexOf(minValue);
console.log(`max number is: ${maxValue} index: ${maxValueIndex}`);
console.log(`min number is: ${minValue} index: ${minValueIndex}`);
