const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const blackColor = document.getElementById("blackColorPick");
const grayColor = document.getElementById("grayColorPick");
const greenColor = document.getElementById("greenColorPick");
const orangeColor = document.getElementById("orangeColorPick");
const pinkColor = document.getElementById("pinkColorPick");
const purpleColor = document.getElementById("purpleColorPick");
const redColor = document.getElementById("redColorPick");
const whiteColor = document.getElementById("whiteColorPick");
const yellowColor = document.getElementById("yellowColorPick");

const colors = document.querySelectorAll('.colors')


const clearButton = document.getElementById("clear");
const eraserTool = document.getElementById("eraser");
const eraserToolButton = document.getElementById("eraser");
const pencilTool = document.getElementById("pencilIcon");

let toolWidth = ctx.lineWidth;


let tool = "pen"



let coord = { x: 0, y: 0 };
ctx.canvas.width = 600;
ctx.canvas.height = 600;


for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener("click", function () {

    currentColor = colors[i].getAttribute('data-color');

    console.log("you choose the color: " + currentColor);
  });
}
  




//let currentColor = black; // Default color is black

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





colorPicker.addEventListener("input", function input() {
  let color = colorPicker.value;
console.log("Selected color: " + color);
currentColor = color;
  
})


function handleTool(selectedTool) {
  if (selectedTool === "pencilTool") {
    pencilTool.style.borderColor = "white";
  }
  else if (selectedTool !== "pencilTool") {
    pencilTool.style.borderColor = "black";
  }
  if (selectedTool === "eraser") {
    eraserTool.style.borderColor = "white";
  }
  else if (selectedTool !== "eraser") {
    eraserTool.style.borderColor = "black";
  }
  if (selectedTool === "clear") {
    clearButton.style.borderColor = "white";
  }
  else if (selectedTool !== "clear") {
    clearButton.style.borderColor = "black";
  }
}


pencilTool.addEventListener("click", function() {
  console.log("You took the pen");
  handleTool("pencilTool")
})

eraserToolButton.addEventListener("click", function() {
  handleTool("eraser")
  console.log("eraser A C T I V A T E D")
  ctx.globalCompositeOperation = "destination-out";
});

const pencilToolButton = document.getElementById("pencilTool");
pencilTool.addEventListener("mousedown", function () {
  selectedTool = "pencil";
  ctx.globalCompositeOperation = "source-over";
});



document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);


clearButton.addEventListener("click", function () {
  selectedTool = "clear";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

/*document.getElementById('downloadCanvas').addEventListener('click', function (e) {
  let canvasUrl = canvas.toDataURL("image/jpeg", 0.5);
  console.log(canvasUrl);
  const createEl = document.createElement('a');
  createEl.href = canvasUrl;
  createEl.download = "download-this-canvas";
  createEl.click();
  createEl.remove();
});*/

document
  .getElementById("downloadCanvas")
  .addEventListener("click", function (e) {
    let canvasUrl = canvas.toDataURL("image/jpeg", 0.5);
    console.log(canvasUrl);
    let saveName = prompt("Enter the name for your masterpiece:");
    if (saveName) {
      const createEl = document.createElement("a");
      createEl.href = canvasUrl;
      createEl.download = saveName + ".jpeg"; 
      createEl.click();
      createEl.remove();
    } else {
      alert("Please enter a name for your drawing.");
    }
  });


document.getElementById('inputWidth').addEventListener('click', function () {
  toolWidth = inputWidth.value
}) 