$("#demo").intlTelInput();

// guardar datos del usuario 
$(document).ready(function nuevoUser() {
	$('#boton-tel').click(function(){
		var fono = $('#demo').val();
		var fonoGuardado = localStorage.getItem('tel');
		if( fono == null || fono.length == 0 || /^\s+$/.test(fono)){
			var $toastContent = $('<span> Campo obligatorio, por favor ingresa tu telefono </span>');
			Materialize.toast($toastContent, 2000);
			return false;
		}else if(fono.length < 9){
			var $toastContent = $('<span> Debes ingresar al menos 9 digitos </span>');
			Materialize.toast($toastContent, 2000);
			return false;

		/*}else if (phoneOk() == false){
			var $toastContent = $('<span>Telefono incorrecto</span>');
			Materialize.toast($toastContent, 2000);
			return false*/

		}else if (isNaN(fono)){
			var $toastContent = $('<span>ingresa solo numeros</span>');
			Materialize.toast($toastContent, 2000);
			return false;
		}else if ( fono === fonoGuardado){
			var $toastContent = $('<span>Numero ya registrado</span>');
			Materialize.toast($toastContent, 2000);
			return false;
		}
		guardarStorageFono(fono);
		return true;
	});
});
// 
/*function phoneOk() {
	$("#demo").intlTelInput();
	var fono = $('#demo').val();
	fono.intlTelInput({
  	utilsScript: "../build/js/utils.js"
	});
	var reset = function() {
	  	fono.removeClass("error");
	};
	fono.blur(function() {
  		reset();
  		if ($.trim(fono.val())) {
    		if (telInput.intlTelInput("isValidNumber")){
      			return true;
    		} else {
      		telInput.addClass("error");
      			return false;
       		}
  		}
	});
	// on keyup / change flag: reset
	fono.on("keyup change", reset);
}*/


// guardar telefono
function guardarStorageFono(b){
	var tel = b;
	localStorage.setItem('tel', tel);
}


