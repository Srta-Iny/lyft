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
//menu collapse;