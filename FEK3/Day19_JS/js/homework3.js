var arr = [
  ["a", 1, true],
  ["b", 2, false],
];

var newArr = [[], [], []];

arr.forEach((element) => {
  element.forEach((e) => {
    if (typeof e == "string") {
      newArr[0].push(e);
    } else if (typeof e == "number") {
      newArr[1].push(e);
    } else if (typeof e == "boolean") {
      newArr[2].push(e);
    }
  });
});

console.log(newArr);
