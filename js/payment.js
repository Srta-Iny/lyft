//sidenav
$(document).ready(function() {
	$(".button-collapse").sideNav();

  	//obtener datos del usuario para actualizar perfil
	var nombreUser = localStorage.getItem('nombreUser');
	var apellidoUser = localStorage.getItem('apellidoUser');
	var correoUser = localStorage.getItem('emailUser');
	imgData = localStorage.getItem('fotoData');
	//contendores 
	var  nameContainer = $('#name');
	var emailContainer = $('#email');
	// asignado valores 
	
	nameContainer.append(nombreUser+" "+apellidoUser);
	emailContainer.append(correoUser);
	$('#foto').attr('src', imgData);
});
// PAYMENT
// estrellitas
$(document).ready(function estrellitas(){
	$('.star').click(function(){
		$(this).toggleClass("grey-text yellow-text");
	});
});
// valor carrera
$(document).ready(function calcularCarrera(){
	var viaje = $('#viaje');
	valor = parseInt(localStorage.getItem('valorCarrera'));
	viaje.html('$ ' + valor + ' usd');
	// sumar propina
	$('#propina li').click(function(){
		var tip= $(this).data('value');
		var suma = valor + tip;
		viaje.html('$ ' + suma + ' usd');
	});

});
// tarjeta
$(document).ready(function(){

	var tarjeta = localStorage.getItem('creditCard');
	var tipo = localStorage.getItem('typeCard');

	var icono = $('<div class="icon"><i class="material-icons icon">credit_card</i></div>');
//contendores 
	var cardContainer = $('#mpago');
	var caja = $('<div class="caja"></div>');
// asignado valores 
	caja.html(tipo + " "+ " n° " + tarjeta);
	cardContainer.append(caja);
	cardContainer.prepend(icono);
});