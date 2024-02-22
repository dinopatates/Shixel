const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const blackColor = document.getElementById("blackColorPick");
const pinkColor = document.getElementById("pinkColorPick");
const eraserTool = document.getElementById("eraser");
const pencilTool = document.getElementById("pencilIcon");
const yellowColor = document.getElementById("yellowColorPick");
const redColor = document.getElementById("redColorPick");
const greenColor = document.getElementById("greenColorPick");
let toolWidth = ctx.lineWidth;


let tool = "pen"

const black = "#000000";
const pink = "#FFC0CB";
const yellow = "#FFFF00";
const red = "#ff0000";
const green = "#008000"


let coord = { x: 0, y: 0 };
ctx.canvas.width = 600;
ctx.canvas.height = 600;

let currentColor = black; // Default color is black

function reposition(event) {
  coord.x = event.clientX - canvas.offsetLeft;
  coord.y = event.clientY - canvas.offsetTop;
}

function start(event) {
  document.addEventListener("mousemove", draw);
  console.log("The pen's working");
  reposition(event);
}

function stop() {
  document.removeEventListener("mousemove", draw);
}

function draw(event) {
  ctx.beginPath();

  ctx.lineWidth = toolWidth;
  ctx.lineCap = "round";

  ctx.strokeStyle = currentColor; // Set stroke color here

  ctx.moveTo(coord.x, coord.y);
  reposition(event);

  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
}

pinkColor.addEventListener("click", function click() {
  console.log("The pen is now pink");
  currentColor = pink; // Change currentColor to pink
});

blackColor.addEventListener("click", function click() {
  console.log("The pen is now black");
  currentColor = black; // Change currentColor to black
});

yellowColor.addEventListener("click", function click() {
  console.log("The pen is now yellow");
  currentColor = yellow; // Change currentColor to black
});

redColor.addEventListener("click", function click() {
  console.log("The pen is now red");
  currentColor = red; // Change currentColor to black
});

greenColor.addEventListener("click", function click() {
  console.log("The pen is now green");
  currentColor = green; // Change currentColor to black
});



pencilTool.addEventListener("click", function click() {
  console.log("You took the pen");
  selectedTool = "pencilTool";
})

const eraserToolButton = document.getElementById("eraser");
eraserToolButton.addEventListener("mousedown", function() {
 selectedTool = "eraser";
 console.log("eraser A C T I V A T E D")
 ctx.globalCompositeOperation = "destination-out";
});

const pencilToolButton = document.getElementById("pencilTool");
pencilTool.addEventListener("mousedown", function() {
 selectedTool = "pencil";
 ctx.globalCompositeOperation = "source-over";
});



document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

document.getElementById('downloadCanvas').addEventListener('click', function(e) {
  let canvasUrl = canvas.toDataURL("image/jpeg", 0.5);
  console.log(canvasUrl);
  const createEl = document.createElement('a');
  createEl.href = canvasUrl;
  createEl.download = "download-this-canvas";
  createEl.click();
  createEl.remove();
});

document.getElementById('inputWidth').addEventListener('click', function() {
  toolWidth = inputWidth.value
}) 