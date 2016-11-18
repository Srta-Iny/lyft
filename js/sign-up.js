// dropdown
$(document).ready(function() {
	$('select').material_select();
});
$('select').material_select('destroy');

// toast 
$(document).ready(function(){
	$('.tooltipped').tooltip({delay: 50});
});

// modal
$(document).ready(function(){
// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	$('.modal').modal();
	$('#modal1').modal('open');
});

         