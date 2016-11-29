
$(document).ready(function nuevoUser(){
	//confirmar usuario
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
  	//obtener datos del usuario para actualizar perfil
	var nombreUser = localStorage.getItem('nombreUser');
	var apellidoUser = localStorage.getItem('apellidoUser');
	var correoUser = localStorage.getItem('emailUser');
	var imgData = localStorage.getItem('fotoData');
    //contendores 
	var  nameContainer = $('#name');
	var emailContainer = $('#email');
	// asignado valores 
	$('#foto').attr('src', imgData);
	nameContainer.append(nombreUser+" "+apellidoUser);
	emailContainer.append(correoUser);
});
