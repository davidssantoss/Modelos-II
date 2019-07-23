function Quica() {
    this.x = 310;
    this.y = 15;
    this.img = [$("#abajo")[0], $("#arriba")[0], $("#salto")[0], $("#sentado")[0]];
    this.sprite = 0;
    this.vida = 1;
    this.puntos = 0;

    this.dibujar = function(ctx) {
        var img = this.img[this.sprite];
        var x = this.x;
        var y = this.y;
        ctx.drawImage(img, x, y);
        ctx.save();
        ctx.fillStyle = "#ffffff";
        ctx.font = "12px sans-serif";
        ctx.fillText("Puntos: " + this.puntos, x - 5, y + 75);
        ctx.fillText("Vidas: " + this.vida, x - 5, y);
        if (this.sprite == 2) {
            ctx.fillStyle = "#ff0000";
            ctx.font = "20px sans-serif";
        }
        ctx.restore();
    }

    this.actualizar = function(accion) {
        if (accion == "arriba" && this.y > 15) {
            this.y -= 10;
        }
        if (accion == "abajo" && this.y < 390) {
            this.y += 10;
        }
        if (accion == "izquierda" && this.x > 0) {
            this.x -= 10;
            this.sprite = 1;
        }
        if (accion == "derecha" && this.x < 600) {
            this.x += 10;
            this.sprite = 0;
        }
        this.x = (640 + this.x) % 640;
        this.y = (480 + this.y) % 480;

        if (this.y > 280 && this.y > 390) {
            this.puntos++;
        }
        if (this.y < 20 && this.seguro == "abajo") {
            this.seguro = "arriba";
            this.puntos++;
        }
    }

    this.colision = function(x, y) {
        var distancia = Math.sqrt(Math.pow((x - this.x), 2) + Math.pow((y - this.y), 2));
        if (distancia > this.img[this.sprite].width)
            return false;
        else
            return true;
    }
}