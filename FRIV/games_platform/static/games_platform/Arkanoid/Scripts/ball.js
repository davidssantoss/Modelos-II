var colors = ["#3ADF00","#0080FF","#F7FE2E","#FF0000","#DF01A5","#FF4000"];

function aleatorio(piso,techo){
	return Math.floor(Math.random() * (techo - piso + 1)) + piso;
}

function Ball(){
    this.x = aleatorio(10,470);
    this.y = aleatorio(150, 300);
    this.ballRadius = 10;
    this.random = Math.floor(Math.random()*6);
    this.color = colors[this.random];
    this.lives = 2;
    this.score = 0;

    this.drawBall = function(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2);
        ctx.fillStyle = this.getColor();
        ctx.fill();
        ctx.closePath();
    }

    this.drawScore = function(ctx){
        ctx.font = "18px Bangers";
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText("Score: "+this.score, 8, 20);
    }
    this.drawLives = function(ctx, canvasWidth){
        ctx.font = "18px Bangers";
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText("Lives: "+this.lives, canvasWidth-65, 20);
    }

    

    this.getColor = function(){
        return this.color;
    }

    this.changeColor = function(){
        nColor = this.getColor();
        while(nColor == this.color){
            this.color = colors[Math.floor(Math.random()*6)]
        }
    }

    this.movement = function(dx, dy){
        this.x += dx;
        this.y += dy;
    }

    this.getX = function(){
        return this.x;
    }
    this.getY = function(){
        return this.y;
    }
    this.getBallRadius = function(){
        return this.ballRadius;
    }

    this.getScore = function(){
        return this.score;
    }

    this.getLives = function(){
        return this.lives;
    }

    this.collision = function(brickWidth, brickHeight, brickX, brickY){
        if(this.x > brickX && this.x < brickX+brickWidth && this.y > brickY && this.y < brickY+brickHeight){
            return true;
        }
    }

    this.brickDestroy = function(){
        this.score++;
    }

    this.dead = function(){
        this.lives--;
        this.x = aleatorio(10,470);
        this.y = aleatorio(150, 300);
    }
}
