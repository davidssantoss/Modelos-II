var playing;
var dx = 3;
var dy = -6;
var brickRowCount = 3;
var brickColumnCount = 5;

$(document).ready(inicio);
$(document).keydown(capturaTeclado);
$(document).mousemove(mouseMoveHandler);

function aleatorio(minimo,maximo){
	return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

function inicio(){
    playing = true;
    myCanvas = $("#myCanvas")[0];
    ctx = myCanvas.getContext("2d");
    buffer = document.createElement("canvas");
    ball = new Ball();
    paddle = new Paddle(myCanvas);
    bricks = [[new Brick(1), new Brick(1), new Brick(1), new Brick(1), new Brick(1)],
              [new Brick(1), new Brick(1), new Brick(1), new Brick(1), new Brick(1)],
              [new Brick(1), new Brick(1), new Brick(1), new Brick(1), new Brick(1)]]

    run();
}
function mouseMoveHandler(e) {
    var relativeX = e.clientX - myCanvas.offsetLeft;
    if(relativeX > 0 && relativeX < myCanvas.width) {
        paddle.setPaddleX(relativeX - paddle.getPaddleWidth()/2);
    }
}

function capturaTeclado(event){
    if(event.which==39 && paddle.getPaddleX() < myCanvas.width-paddle.getPaddleWidth()|| 
    event.which==68 && paddle.getPaddleX() < myCanvas.width-paddle.getPaddleWidth()){
        paddle.movement('derecha');
    }
    if(event.which==37 && paddle.getPaddleX() > 0 
    || event.which==65 && paddle.getPaddleX() > 0){
        paddle.movement('izquierda');
    }
		

}

function reload() {
    document.location.reload()
}

function run(){
    buffer.width = myCanvas.width;
    buffer.height = myCanvas.height;
    ctxBuffer = buffer.getContext("2d");

    if(playing){
        ctxBuffer.clearRect(0,0,buffer.width,buffer.height);
        for(i=0; i<brickColumnCount; i++){
            for(j=0; j<brickRowCount; j++){
                bricks[j][i].drawBrick(ctxBuffer, i, j);
            }
        }
        for(i=0; i<brickColumnCount; i++){
            for(j=0; j<brickRowCount; j++){
                if(ball.collision(bricks[j][i].getBrickWidth(), bricks[j][i].getBrickHeight(), bricks[j][i].getBrickX(), bricks[j][i].getBrickY())){
                    this.dy = -this.dy;
                    if(this.dx < 0){
                        this.dx = -1*aleatorio(2,6);
                    }else{
                        this.dx = aleatorio(2,6);
                    }
                    bricks[j][i].setState();
                    ball.changeColor();
                    ball.brickDestroy();
                    if(ball.getScore() == brickRowCount*brickColumnCount) {
                        ctxBuffer.font="60px Bangers";
                        ctxBuffer.strokeStyle="white";
                        ctxBuffer.strokeText("Has ganado!!", 125,150);
                        ctxBuffer.fillStyle = "white";
						ctxBuffer.fillText("Vuelve a jugar dando clic al boton", 125,200, 200);
                        playing = false;
                    }
                }
            }
        }

        ball.drawBall(ctxBuffer);
        ball.drawScore(ctxBuffer);
        ball.drawLives(ctxBuffer, buffer.width);
        if(ball.getX() + this.dx > myCanvas.width-ball.getBallRadius() || ball.getX() + this.dx < ball.getBallRadius()) {
            if(this.dx < 0){
                this.dx = aleatorio(2,6);
            }else{
                this.dx = -1*aleatorio(2,6);
            }
            ball.changeColor();
        }
        paddle.drawPaddle(ctxBuffer);
        if(ball.getY() + this.dy < ball.getBallRadius()) {
            this.dy = -this.dy;
            ball.changeColor();
        }else if(ball.getY() + this.dy > myCanvas.height-ball.getBallRadius()){
            if(ball.getX() > paddle.getPaddleX() && ball.getX() < paddle.getPaddleX() + paddle.getPaddleWidth()){
                this.dy = -this.dy;
                if(this.dx < 0){
                    this.dx = -1*aleatorio(2,6);
                }else{
                    this.dx = aleatorio(2,6);
                }
                ball.changeColor();
            }else {
                if(ball.getLives()>0){
                    ball.dead();
                    this.dx = aleatorio(-6,6);
                    this.dy = -this.dy;
                }else {
                    ctxBuffer.strokeStyle="white";
                    ctxBuffer.font="60px Bangers";
                    ctxBuffer.strokeText("Has perdido!!", 125,150);
                    ctxBuffer.fillStyle = "white";                    
					ctxBuffer.fillText("Vuelve a jugar dando clic al boton", 125,200, 200);
                    playing = false;
                }
            }
        }
        ball.movement(this.dx, this.dy);
        
        
        ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
        ctx.drawImage(buffer, 0, 0);
        requestAnimationFrame(run);
    }
}