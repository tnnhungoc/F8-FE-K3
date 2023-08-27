// var arrA = [1, 4, 3, 2];
// var arrB = [5, 2, 6, 7, 1];

// function arrDiff(arr1, arr2) {
//   var newArr = [];
//   var arr12 = arr1.concat(arr2);

//   newArr = arr12.filter(function (item) {
//     return arr2.indexOf(item) < 0 || arr1.indexOf(item) < 0;
//   });
//   console.log(newArr);
// }
// arrDiff(arrA, arrB);

var arrA = [1, 4, 3, 2, 5, 3, 6, 8, 1]
var arrB = [5, 2, 6, 7, 1, 3]

function fi(array) {
  return array.reduce((resu, item) => {
    if (!resu.includes(item)) resu.push(item)
    return resu
  }, [])
}
function fi(arrA, arrB) {
  if (Array.isArray(arrA)  Array.isArray(arrB))
    return fi(arrA.fi((n) => arrB.includes(n)))
  else return "arrA hoặc arrB không phải mảng"
}

console.log(fi(arrA, arrB))
