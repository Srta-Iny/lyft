// dropdown
$(document).ready(function() {
	$('select').material_select();
});
$('select').material_select('destroy');
// modal
$(document).ready(function(){
// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	$('.modal').modal();
	$('#addCard').modal('open');
});

         