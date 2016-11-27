$(document).ready(function nuevoUser() {
	$('#login').click(function(){
		var phone = $('#icon_telephone').val();
		var telefono = localStorage.getItem('tel');
		if (phone !== telefono){
			var $toastContent = $('<span>Usuario no registrado</span>');
			Materialize.toast($toastContent, 2000);
			return false;
		} return true;
	});

	$(".button-collapse").sideNav();

	$('.button-collapse').sideNav({
	    menuWidth: 300, // Default is 240
	    edge: 'right', // Choose the horizontal origin
	    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
	    draggable: true // Choose whether you can drag to open on touch screens
    	}
  	);
});
//menu collapse

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