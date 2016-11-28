//sidenav
$(document).ready(function() {
	$(".button-collapse").sideNav();

	$('.button-collapse').sideNav({
	    menuWidth: 300, // Default is 240
	    edge: 'right', // Choose the horizontal origin
	    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
	    draggable: true // Choose whether you can drag to open on touch screens
    	}
  	);
  	//obtener datos del usuario para actualizar perfil
	var nombreUser = localStorage.getItem('nombreUser');
	var apellidoUser = localStorage.getItem('apellidoUser');
	var correoUser = localStorage.getItem('emailUser');
	//contendores 
	var  nameContainer = $('#name');
	var emailContainer = $('#email');
	// asignado valores 
	nameContainer.append(nombreUser+" "+apellidoUser);
	emailContainer.append(correoUser);
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
	viaje.html('$ ' + valor);
	// sumar propina
	$('#propina li').click(function(){
		var tip= $(this).data('value');
		var suma = valor + tip;
		viaje.html('$ ' + suma);
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