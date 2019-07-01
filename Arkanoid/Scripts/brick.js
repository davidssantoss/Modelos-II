var colors = ["#3ADF00","#0080FF","#F7FE2E","#FF0000","#DF01A5","#FF4000"];

function Brick(state){
    this.brickWidth = 75;
    this.brickHeight = 20;
    this.brickPadding = 10;
    this.brickOffsetTop = 30;
    this.brickOffsetLeft = 30;
    this.brickX;
    this.brickY;
    this.state = state;

    this.drawBrick = function(ctx, c, r){
        if(this.state == 1){
            this.brickX = (c*(this.brickWidth+this.brickPadding))+this.brickOffsetLeft;
            this.brickY = (r*(this.brickHeight+this.brickPadding))+this.brickOffsetTop;
            ctx.beginPath();
            ctx.rect(this.brickX, this.brickY, this.brickWidth, this.brickHeight);
            ctx.fillStyle = this.getColor();
            ctx.fill();
            ctx.closePath();
            this.setColor(colors[c]);
        }    
    }

    this.getColor = function(){
        return this.color;
    }

    this.setColor = function(color){
        this.color = color;
    }

    this.getBrickX = function(){
        return this.brickX;
    }

    this.getBrickY = function(){
        return this.brickY;
    }

    this.getBrickWidth = function(){
        return this.brickWidth;
    }
    this.getBrickHeight = function(){
        return this.brickHeight;
    }

    this.setState = function(){
        this.state = 0
        this.brickHeight = 0;
        this.brickWidth = 0;
    }

    this.getState = function(){
        return this.state;
    }
}