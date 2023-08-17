var paragraph =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
var regex = /\S+/g;

// push the text on the page
document.getElementById("text").innerText = paragraph;

// add each span tag to each word
var result = paragraph.replace(regex, function (a) {
  return "<span class ='non-color'>" + a + "</span>";
});

//push result on the page
document.getElementById("text").innerHTML = result;

var colorActive = "color";
var time = 1000;
var colors = document.querySelectorAll(".non-color");
console.log(colors.length);
changeColors();
setInterval(changeColors, colors.length * time);

function changeColors() {
  colors.forEach((color, index) => {
    //color
    setTimeout(() => {
      color.classList.add(colorActive);
    }, index * time);

    //non-color
    setTimeout(() => {
      color.classList.remove(colorActive);
    }, index * time + time);
  });
}
