function aleatorio(piso, techo) {
    return Math.floor(Math.random() * (techo - piso + 1)) + piso;
}

function Calaca(altura) {
    var opc = aleatorio(1, 100) % 2;
    if (opc == 1)
        this.img = $("#calaca_1")[0];
    else
        this.img = $("#calaca_2")[0];
    this.x = (0, 0 + altura);
    this.y = (0, 0 + altura);
    this.velocidad = 0;
    while (this.velocidad == 0)
        this.velocidad = aleatorio(3, 5);

    this.dibujar = function(ctx) {
        var img = this.img;
        ctx.drawImage(img, this.x, this.y);
    }

    this.actualizar = function() {
        this.x += this.velocidad;
        this.x = (640 + this.x) % 640;
    }
}