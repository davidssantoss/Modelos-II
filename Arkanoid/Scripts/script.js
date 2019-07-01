var playing;
var dx = 2;
var dy = -2;
var brickRowCount = 3;
var brickColumnCount = 5;

$(document).ready(inicio);
$(document).keydown(capturaTeclado);

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
                    bricks[j][i].setState();
                    ball.changeColor();
                    ball.brickDestroy();
                    if(ball.getScore() == brickRowCount*brickColumnCount) {
                        alert("YOU WIN, CONGRATULATIONS!");
                        document.location.reload();
                    }
                }
            }
        }

        ball.drawBall(ctxBuffer);
        ball.drawScore(ctxBuffer);
        ball.drawLives(ctxBuffer, buffer.width);
        if(ball.getX() + this.dx > myCanvas.width-ball.getBallRadius() || ball.getX() + this.dx < ball.getBallRadius()) {
            this.dx = -this.dx;
            ball.changeColor();
        }
        paddle.drawPaddle(ctxBuffer);
        if(ball.getY() + this.dy < ball.getBallRadius()) {
            this.dy = -this.dy;
            ball.changeColor();
        }else if(ball.getY() + this.dy > myCanvas.height-ball.getBallRadius()){
            if(ball.getX() > paddle.getPaddleX() && ball.getX() < paddle.getPaddleX() + paddle.getPaddleWidth()){
                this.dy = -this.dy;
                ball.changeColor();
            }else {
                if(ball.getLives()>0){
                    ball.dead();
                    this.dx = 2;
                    this.dy = -2;
                }else {
                    alert("GAME OVER");
                    document.location.reload();
                }
            }
        }
        ball.movement(this.dx, this.dy);
        
        
        ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
        ctx.drawImage(buffer, 0, 0);
        requestAnimationFrame(run);
    }
}