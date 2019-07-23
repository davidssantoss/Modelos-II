function Paddle(canvas){
    this.paddleHeight = 10;
    this.paddleWidth = 75;
    this.paddleX = (canvas.width-this.paddleWidth)/2;
    this.paddleY = canvas.height-this.paddleHeight;

    this.drawPaddle = function(ctx){
        ctx.beginPath();
        ctx.rect(this.paddleX, this.paddleY, this.paddleWidth, this.paddleHeight);
        ctx.fillStyle = "#BDBDBD";
        ctx.fill();
        ctx.closePath();
    }

    this.movement = function(direction){
        if(direction == "derecha"){
            this.paddleX += 15;
        }else{
            this.paddleX -= 15;
        }
    }

    this.getPaddleX = function(){
        return this.paddleX;
    }
    this.getPaddleWidth = function(){
        return this.paddleWidth;
    }

    this.setPaddleX = function(X){
        this.paddleX = X;
    }
}