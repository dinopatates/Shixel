const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


let coord = { x: 0, y: 0 };
ctx.canvas.width = 600;
ctx.canvas.height = 600;


function reposition(event) {
  coord.x = event.clientX - canvas.offsetLeft;
  coord.y = event.clientY - canvas.offsetTop;
}

function start(event) {
  document.addEventListener("mousemove", draw);
  reposition(event);
}

function stop() {
  document.removeEventListener("mousemove", draw);
}

function draw(event) {
  ctx.beginPath();

  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#ACD3ED";

  ctx.moveTo(coord.x, coord.y);
  reposition(event);

  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
}


document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);
