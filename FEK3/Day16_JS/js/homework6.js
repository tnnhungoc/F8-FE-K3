var board = document.getElementById("board");
console.log(board);
for (var i = 0; i < 8; i++) {
  for (var j = 0; j < 8; j++) {
    var square = document.createElement("div");

    square.className = "square";
    board.appendChild(square);
    if ((i + j) % 2 === 0) {
      square.style.backgroundColor = "#000";
    }
  }
}
