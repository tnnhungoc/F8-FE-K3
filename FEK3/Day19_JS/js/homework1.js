var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

function arrDiff(arr1, arr2) {
  var newArr = [];
  var arr12 = arr1.concat(arr2);

  newArr = arr12.filter(function (item) {
    return arr2.indexOf(item) < 0 || arr1.indexOf(item) < 0;
  });
  console.log(newArr);
}
arrDiff(arrA, arrB);
