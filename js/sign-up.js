
// dropdown telefon0
$(document).ready(function() {
	$('select').material_select();
});
$('select').material_select('destroy');


// obter datos a guardar 

// guardar datos del usuario 
$(document).ready(function nuevoUser() {
	$('#boton-tel').click(function(){
		var pais = $('#paises').val();
		var fono = $('#icon_telephone').val();
		var fonoGuardado = localStorage.getItem('tel');
		console.log(fono);
		if( fono == null || fono.length == 0 || /^\s+$/.test(fono)){
			var $toastContent = $('<span> Campo obligatorio, por favor ingresa tu telefono </span>');
			Materialize.toast($toastContent, 2000);
			return false;
		}else if(fono.length < 9){
			var $toastContent = $('<span> Debes ingresar al menos 9 digitos </span>');
			Materialize.toast($toastContent, 2000);
			return false;
		}else if (isNaN(fono)){
			var $toastContent = $('<span>ingresa solo numeros</span>');
			Materialize.toast($toastContent, 2000);
			return false;
		}else if ( pais && fono === fonoGuardado){
			var $toastContent = $('<span>Numero ya registrado</span>');
			Materialize.toast($toastContent, 2000);
			return false;
		}
		guardarStorageFono(pais, fono);
		return true;
	});
});
// guardar telefono
function guardarStorageFono(a, b){
	var usuario = {
	    pais: a,
	    fono: b
	};
	localStorage.setItem('tel', JSON.stringify(usuario));
}
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
	$('#addPerfil').click(function(){
		var nombre = $('#icon_prefix').val();
		var correo = $('#email').val();
		//obteniendo nombre
		if( nombre == null || nombre.length == 0){
			var $toastContent = $('<span> Campo obligatorio, ingresa nombre </span>');
			Materialize.toast($toastContent, 2000);
			return false;
		}else if (nombre.match(/[^a-zA-Z]+/g)){
			var $toastContent = $('<span>Ingresa solo letras</span>');
			Materialize.toast($toastContent, 2000);
			return false;
		}
		//obteniendo correo
		var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(  correo == null ||  correo.length == 0 || /^\s+$/.test(correo)){
			var $toastContent = $('<span> Campo obligatorio, por favor ingresa tu correo </span>').fadeOut(3000);
			Materialize.toast($toastContent, 2000);
			return false;
		}else if( !expr.test(correo)){
			var $toastContent = $('<span> Ingresa correo con formato valido </span>').fadeOut(3000);
			Materialize.toast($toastContent, 2000);
			return false;
		}
		var terms = $('#filled-in-box');
		if( terms.not(checked)){
			var $toastContent = $('<span>Acepta los terminos de uso</span>');
			Materialize.toast($toastContent, 2000);
			return false;
		}
		guardarStorageUsuario(nombre, correo);
		return true;
	});
});

function guardarStorageUsuario(a, b){
	var usuario = {
	    nombre: a,
	    correo: b
	};
	localStorage.setItem('datosUser', JSON.stringify(usuario));
}


