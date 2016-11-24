$(document).ready(function(){
// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	$('.modal').modal();
//obtener datos del usuario para actualizar perfil
	var nombreUser = localStorage.getItem('nombreUser');
	var apellidoUser = localStorage.getItem('apellidoUser');
	var correoUser = localStorage.getItem('emailUser');
//contendores 
	var  nameContainer = $('#nombre');
	var emailContainer = $('#correo');
// asignado valores 
	nameContainer.append(nombreUser+" "+apellidoUser);
	emailContainer.append(correoUser);
});
// cambiar datos perfil 
$(document).ready(function editarPerfil(){
	$('#aceptar').click(function(){
		var newName = $('#new-name').val();
		var newApellido = $('#new-last').val();
		var newCorreo = $('#new-email').val();
		var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if( newName == null || newName.length == 0){
			var $toastContent = $('<span> Campo obligatorio, ingresa nombre </span>');
			Materialize.toast($toastContent, 2000);
			return false;
		}else if (newName.match(/[^a-zA-Z]+/g)){
			var $toastContent = $('<span>Ingresa solo letras</span>');
			Materialize.toast($toastContent, 2000);
			return false;
		}else if (newName.match(/[^a-zA-Z]+/g)){
			var $toastContent = $('<span>Ingresa solo letras</span>');
			Materialize.toast($toastContent, 2000);
			return false;
		}else if(newApellido == null || newApellido.length == 0){
			var $toastContent = $('<span> Campo obligatorio, ingresa apellido </span>');
			Materialize.toast($toastContent, 2000);
			return false;
		}else if (newApellido.match(/[^a-zA-Z]+/g)){
			var $toastContent = $('<span>Ingresa solo letras</span>');
			Materialize.toast($toastContent, 2000);
			return false;
		}else if( newCorreo == null ||  newCorreo.length == 0 || /^\s+$/.test(newCorreo)){
			var $toastContent = $('<span> Campo obligatorio, por favor ingresa tu correo </span>').fadeOut(3000);
			Materialize.toast($toastContent, 2000);
			return false;
		}else if( !expr.test(newCorreo)){
			var $toastContent = $('<span> Ingresa correo con formato valido </span>').fadeOut(3000);
			Materialize.toast($toastContent, 2000);
			return false;
		}
		guardarStorageUsuario(newName, newApellido, newCorreo);
		location.reload();
		return true;
	});
});
function guardarStorageUsuario(a, b, c){
    var nombre = a;
    var apellido = b;
    var correo = c;
	localStorage.setItem('nombreUser', nombre);
	localStorage.setItem('apellidoUser',apellido);
	localStorage.setItem('emailUser', correo);
}
		