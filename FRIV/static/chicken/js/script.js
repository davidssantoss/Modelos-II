var jugando;

$(document).ready(inicio);
$(document).keydown(capturaTeclado);

function inicio() {
    jugando = true;
    miCanvas = $("#mi_canvas")[0];
    contexto = miCanvas.getContext("2d");
    buffer = document.createElement("canvas");
    quica = new Quica();
    calacas = [new Calaca(100), new Calaca(160),
        new Calaca(240), new Calaca(330), new Calaca(400)
    ];
    run();

    $('#instrucciones').click(function() {
        $('#popup').fadeIn('slow');
        $('.popup-overlay').fadeIn('slow');
        $('.popup-overlay').height($(window).height());
        return false;
    });

    $('#close').click(function() {
        $('#popup').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');
        return false;
    });

    $("#iniciar").click(function() {
        if (jugando == false)
            inicio();
    });
}

function capturaTeclado(event) {
    if (event.which == 38 || event.which == 87)
        quica.actualizar('arriba');
    if (event.which == 40 || event.which == 83)
        quica.actualizar('abajo');
    if (event.which == 39 || event.which == 68)
        quica.actualizar('derecha');
    if (event.which == 37 || event.which == 65)
        quica.actualizar('izquierda');

}

function run() {
    buffer.width = miCanvas.width;
    buffer.height = miCanvas.height;
    contextoBuffer = buffer.getContext("2d");

    if (jugando) {
        contextoBuffer.clearRect(0, 0, buffer.width, buffer.height);

        quica.dibujar(contextoBuffer);
        for (i = 0; i < calacas.length; i++) {
            calacas[i].dibujar(contextoBuffer);
            calacas[i].actualizar();
            if (quica.colision(calacas[i].x, calacas[i].y)) {
                $('#pierde')[0].play();
                jugando = false;
            }
        }

        contexto.clearRect(0, 0, miCanvas.width, miCanvas.height);
        contexto.drawImage(buffer, 0, 0);
        setTimeout("run()", 20);

    } else {
        contextoBuffer.clearRect(0, 0, buffer.width, buffer.height);
        contextoBuffer.fillStyle = "#ffffff";
        quica.sprite = 3;
        quica.vida = 0;
        contextoBuffer.font = "50px sans-serif";
        contextoBuffer.fillText("GAME OVER", 180, 250);
        contextoBuffer.fillStyle = "#ff0000";
        contextoBuffer.font = "20px sans-serif";
        contextoBuffer.fillText("Claudio no llegó al otro lado", 190, 280);
        contexto.clearRect(0, 0, miCanvas.width, miCanvas.height);
        contexto.drawImage(buffer, 0, 0);
    }

}