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
