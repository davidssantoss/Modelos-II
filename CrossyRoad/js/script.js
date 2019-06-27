
var jugando;

$(document).ready(inicio);
$(document).keydown(capturaTeclado);

function inicio(){
	jugando = true;
	miCanvas = $("#mi_canvas")[0];
	contexto = miCanvas.getContext("2d");
	buffer = document.createElement("canvas");
	gallina = new Gallina();
	carros = [new Carro(), new Carro(),
				   new Carro(), new Carro(),
				   new Carro()];
	run();

	$('#instrucciones').click(function(){
        $('#popup').fadeIn('slow');
        $('.popup-overlay').fadeIn('slow');
        $('.popup-overlay').height($(window).height());
        return false;
    });

    $('#close').click(function(){
        $('#popup').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');
        return false;
    });

    $("#iniciar").click(function(){
		if(jugando==false)
			inicio();
	});
}

function capturaTeclado(event){
	if(event.which==38 || event.which==87)
		gallina.actualizar('arriba');
	if(event.which==40 || event.which==83)
		gallina.actualizar('abajo');
	if(event.which==39 || event.which==68)
		gallina.actualizar('derecha');
	if(event.which==37 || event.which==65)
		gallina.actualizar('izquierda');

}

function run(){
	buffer.width = miCanvas.width;
	buffer.height = miCanvas.height;
	contextoBuffer = buffer.getContext("2d");

	if(jugando){
		contextoBuffer.clearRect(0,0,buffer.width,buffer.height);

		gallina.dibujar(contextoBuffer);
		for(i=0;i<carros.length;i++){
			carros[i].dibujar(contextoBuffer);
			carros[i].actualizar();
			if(gallina.colision(carros[i].x,carros[i].y)){
				gallina.sprite = 2;
				gallina.vida = gallina.vida - 100;
				$('#pierde')[0].play();
			}
		}

		if(gallina.vida <= 0)
			jugando = false;

		contexto.clearRect(0,0,miCanvas.width,miCanvas.height);
		contexto.drawImage(buffer, 0, 0);
		setTimeout("run()",20);

	}else{
		contextoBuffer.clearRect(0,0,buffer.width,buffer.height);
		contextoBuffer.fillStyle = "#ffffff";
		gallina.sprite = 3;
		gallina.vida = 0;
		gallina.dibujar(contextoBuffer);
		contextoBuffer.font = "50px sans-serif";
		contextoBuffer.fillText("GAMEOVER", 300, 440);
		contextoBuffer.fillStyle = "#ff0000";
		contextoBuffer.font = "15px sans-serif";
		contextoBuffer.fillText("try again", 550, 460);
		contexto.clearRect(0,0,miCanvas.width,miCanvas.height);
		contexto.drawImage(buffer, 0, 0);
	}

}
