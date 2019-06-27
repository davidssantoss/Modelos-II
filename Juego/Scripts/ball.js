var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var colors = ["#2ECCFA","#40FF00","#FF0000","#FFFF00","#FF00FF"]
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;


function drawBall() {
    var randomColor = Math.floor(Math.random()*5);
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2, false);
    ctx.fillStyle = colors[randomColor];
    ctx.fill();
    ctx.closePath();
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    if(y + dy > canvas.height-ballRadius|| y + dy < ballRadius) {
        dy = -dy;
        changeColor();
    }
    if(x + dx > canvas.width-ballRadius|| x + dx < ballRadius) {
        dx = -dx;
        changeColor();
    }
    x = x+dx;
    y = y+dy;
}

setInterval(draw, 10);

