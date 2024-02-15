const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const blackColor = document.getElementById("blackColorPick")
const pinkColor = document.getElementById("pinkColorPick")
const black = "#000000";
const pink = "#FFC0CB";



let coord = { x: 0, y: 0 };
ctx.canvas.width = 600;
ctx.canvas.height = 600;


function reposition(event) {
  coord.x = event.clientX - canvas.offsetLeft;
  coord.y = event.clientY - canvas.offsetTop;
}

function start(event) {
  document.addEventListener("mousemove", draw);
  console.log("The pen's working")
  reposition(event);
}

function stop() {
  document.removeEventListener("mousemove", draw);
}

function draw(event) {
  ctx.beginPath();

  ctx.lineWidth = 5;
  ctx.lineCap = "round";

  pinkColor.addEventListener("click", function click() {

    console.log("The pen is now pink")
    ctx.stroke.Style = pink;
})
ctx.stroke.Style = pink;

blackColor.addEventListener("click", function click() {
  console.log("The pen is now black")
  ctx.strokeStyle = black;
})
ctx.strokeStyle = black;  // peut être utiliser un if else pour que cela marche étant donné qu'il ne prend en considération que la dernière attribution.

  ctx.moveTo(coord.x, coord.y);
  reposition(event);

  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
}



document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function() {
 ctx.clearRect(0, 0, canvas.width, canvas.height);
});