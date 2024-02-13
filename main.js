let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let isDrawing = false;
function startDrawing(event) {
 isDrawing = true;
 draw(event);
}
function draw(event) {
 if (!isDrawing) return;
 const x = event.clientX - canvas.offsetLeft;
 const y = event.clientY - canvas.offsetTop;
 ctx.lineTo(x, y);
 ctx.stroke();
}
function stopDrawing() {
 isDrawing = false;
 ctx.beginPath();
}
canvas.addEventListener("mousedown", startDrawing, draw);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);


const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function() {
 ctx.clearRect(0, 0, canvas.width, canvas.height);
});




const pencil = document.getElementsById("pencilIcon");
pencil.addEventListener("mousedown", function() {
});
