
// dropdown telefonp
$(document).ready(function() {
	$('select').material_select();
});
$('select').material_select('destroy');


// obter datos a guardar 
var pais = $('#paises').val();
var fono = $('#icon_telephone').val();
// guardar datos del usuario 
$(document).ready(function nuevoUser() {
	$('#boton-tel').click(function(){
		console.log(fono);
		if( fono == null || fono.length == 0 || /^\s+$/.test(fono)){
			var $toastContent = $('<span> Campo obligatorio, por favor ingresa tu telefono </span>');
			Materialize.toast($toastContent, 3000);
			return false;
		}else if(telefono.length < 8){
			var $toastContent = $('<span> Tu contraseña debe tener al menos 9 digitos </span>');
			Materialize.toast($toastContent, 3000);
			return false;
		}
	});
});
// modal codigo  
$(document).ready(function(){
// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	$('.modal').modal();
	$('#modal1').modal('open');
});

		 