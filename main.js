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
const brownColor = document.getElementById("brownColorPick");
const blueColor = document.getElementById("blueColorPick");
const cyanColor = document.getElementById("cyanColorPick");

const tools = document.querySelectorAll(".tools")
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

    for (let j = 0; j < colors.length; j++) {
      colors[j].style.borderColor = "black";
    }

    colors[i].style.borderColor = "white";
    console.log("you choose the color: " + currentColor);
  });
}


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

  ctx.strokeStyle = currentColor;

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


for (let i = 0; i < tools.length; i++) {
  tools[i].addEventListener("click", function () {
    currentTool = tools[i].getAttribute('data-tool');

    console.log("you choose the tool: " + currentTool);


    for (let j = 0; j < tools.length; j++) {
      tools[j].style.borderColor = "black";
    }


    tools[i].style.borderColor = "white";
  });
}


pencilTool.addEventListener("click", function () {
  console.log("You took the pen");
})

eraserToolButton.addEventListener("click", function () {

  console.log("eraser A C T I V A T E D")
  ctx.globalCompositeOperation = "destination-out";
});

const pencilToolButton = document.getElementById("pencilTool");
pencilTool.addEventListener("mousedown", function () {
  ctx.globalCompositeOperation = "source-over";
});



document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);


clearButton.addEventListener("click", function () {
  selectedTool = "clear";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

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