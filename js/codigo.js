// modal codigo  
$(document).ready(function(){
// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	$('.modal').modal();
	$('#modal1').modal('open');
	// agregando al codigo
	var cod =  crearCodigo();
	var codigo =('<span>Lab - </span>');
	var contenedor = $('#contenedor');
	contenedor.append(codigo + cod);

});
// generar codigo
function crearCodigo(){
	var cod = (Math.floor(Math.random()*399)+1);
	cod = cod.toString();
	while(cod.length < 3){
		cod = "0" + cod;
	}
	localStorage.setItem('codigo', cod);
	return cod;
}
// validar codigo 
$(document).ready(function validarCodigo(){

	$('#add-cod').click(function(){
		var codigoGuardado = localStorage.getItem('codigo');
		var codigoIngresado = $('#cod').val();
		if( codigoIngresado !== codigoGuardado ){
			var $toastContent = $('<span>Codigo erroneo</span>');
			Materialize.toast($toastContent, 2000);
			return false;
		}
		return true;
	});
});
// Datos usuarios
$(document).ready(function datosPerfil(){

	$('#cc-number').payment('formatCardNumber');
	

	$('#addPerfil').click(function(){
		var nombre = $('#icon_prefix').val();
		var apellido = $('#apellido').val();
		var correo = $('#email').val();
		var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var creditCard = $('#cc-number').val();
		console.log(creditCard);
		// validar tarjeta de credito 
		var validarTC = $.payment.validateCardNumber(creditCard);
		var marca = $.payment.cardType(creditCard);
		$('.cc-brand').text(marca);
		
		//obteniendo nombre
		if( nombre == null || nombre.length == 0){
			var $toastContent = $('<span> Campo obligatorio, ingresa nombre </span>');
			Materialize.toast($toastContent, 2000);
			return false;
		}else if (nombre.match(/[^a-zA-Z]+/g)){
			var $toastContent = $('<span>Ingresa solo letras en el nombre</span>');
			Materialize.toast($toastContent, 2000);
			return false;
		}else if( apellido == null || apellido.length == 0){
			console.log(apellido);
			var $toastContent = $('<span> Campo obligatorio, ingresa apellido </span>');
			Materialize.toast($toastContent, 2000);
			return false;
		}else if (apellido.match(/[^a-zA-Z]+/g)){
			var $toastContent = $('<span>Ingresa solo letras en el apellido</span>');
			Materialize.toast($toastContent, 2000);
			return false;
		}else if(  correo == null ||  correo.length == 0 || /^\s+$/.test(correo)){
			var $toastContent = $('<span> Campo obligatorio, por favor ingresa tu correo </span>');
			Materialize.toast($toastContent, 2000);
			return false;
		}else if( !expr.test(correo)){
			var $toastContent = $('<span> Ingresa correo con formato valido </span>');
			Materialize.toast($toastContent, 2000);
			return false;
		}else if (!validarTC) {
			var $toastContent = $('<span>Your card is not valid!</span>');
			Materialize.toast($toastContent, 2000);
			return false;
		}else if( $('#filled-in-box').not(":checked").length){
			console.log($('#filled-in-box').val());
			var $toastContent = $('<span>Acepta los terminos de uso</span>');
			Materialize.toast($toastContent, 2000);
			return false;
		}
		guardarStorageUsuario(nombre, apellido, correo, creditCard, marca);
		return true;
	});
});

function guardarStorageUsuario(a, b, c, d, e){
    var nombre = a;
    var apellido = b;
    var correo = c;
    var tarjeta = d;
    var tipoTarjeta = e
    tipoTarjeta.toString();
 
	localStorage.setItem('nombreUser', nombre);
	localStorage.setItem('apellidoUser',apellido);
	localStorage.setItem('emailUser', correo);
	localStorage.setItem('creditCard', tarjeta);
	localStorage.setItem('typeCard', tipoTarjeta);
}

