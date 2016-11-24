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
});
$(document).ready(function estrellitas(){
	$('.star').click(function(){
		$(this).toggleClass("grey-text yellow-text");
	});
});