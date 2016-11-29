function initMap() {
	// variables para obtener id de ubicacion
	var origin_place_id = null;
	var destination_place_id = null;
	var destino = null;

	var travel_mode = google.maps.TravelMode.WALKING;
	var map = new google.maps.Map(document.getElementById('map'), {
		mapTypeControl: false,
		center: {lat: -33.8688, lng: 151.2195},
		zoom: 15
	});
	var centro = null;
	// Try HTML5 geolocation.
	// geolocalizacion muestra ubicacion actual 
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			centro = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			map.setCenter(centro);
			var marker = new google.maps.Marker({
			position: centro,
			map: map,
			draggable:true,
			title:"Drag me!"
			})
		}, function() {
			alert('error, turn on gps');
		});
	} else {
		// Browser doesn't support Geolocation
		alert("Browser doesn't support Geolocation");
	}
	
	// Geocoding genera latitud y longitud 
	var directionsService = new google.maps.DirectionsService;
	var directionsDisplay = new google.maps.DirectionsRenderer;
	directionsDisplay.setMap(map);

	var destination_input = document.getElementById('destination-input');

	map.controls[google.maps.ControlPosition.TOP_LEFT].push(destination_input);

	var destination_autocomplete = new google.maps.places.Autocomplete(destination_input);
	destination_autocomplete.bindTo('bounds', map);

	// Sets a listener on a radio button to change the filter type on Places
	// Autocomplete.
	travel_mode = google.maps.TravelMode.DRIVING;

	function expandViewportToFitPlace(map, place) {
		if (place.geometry.viewport) {
			map.fitBounds(place.geometry.viewport);
		} else {
			map.setCenter(place.geometry.location);
			map.setZoom(17);
		}
	}
	
	function geocodeLatLng() {
	var geocoder = new google.maps.Geocoder;
	var latlng = {lat: parseFloat(centro.lat), lng: parseFloat(centro.lng)};
	geocoder.geocode({'location': latlng}, function(results, status) {
		if (status === google.maps.GeocoderStatus.OK) {
			origin_place_id = results[0].place_id;
		ruta();
		} else {
			return false;
		}
	});
	// matriz de distancia se ingresan datos para calcular en el callback
	var service = new google.maps.DistanceMatrixService();
	service.getDistanceMatrix(
	{
		origins: [centro],
		destinations: [destino],
		travelMode: google.maps.TravelMode.DRIVING,
		unitSystem: google.maps.UnitSystem.METRIC,
		avoidHighways: true,
		avoidTolls: true,
	}, callback);
}

	/*origin_autocomplete.addListener('place_changed', function() {
		var place = origin_autocomplete.getPlace();
		if (!place.geometry) {
			window.alert("Autocomplete's returned place contains no geometry");
			return;
		}
		expandViewportToFitPlace(map, place);

		// If the place has a geometry, store its place ID and route if we have
		// the other place ID
		origin_place_id = place.place_id;
		route(origin_place_id, destination_place_id, travel_mode,
					directionsService, directionsDisplay);
	});*/

	// toma los datos del input y genera ruta de destino
	function ruta(){
		route(origin_place_id, destination_place_id, travel_mode,
					directionsService, directionsDisplay);
	}
	// funcion que toma los datos del autocompletar
	destination_autocomplete.addListener('place_changed', function() {
		var place = destination_autocomplete.getPlace();
		if (!place.geometry) {
			window.alert("Autocomplete's returned place contains no geometry");
			return;
		}
		expandViewportToFitPlace(map, place);

		destino = {lat: parseFloat(place.geometry.location.lat()), lng: parseFloat(place.geometry.location.lng())};
		
		destination_place_id = place.place_id;


		// If the place has a geometry, store its place ID and route if we have
	geocodeLatLng();
		// the other place ID
		
		
	});
	// calcular ruta
	function route(origin_place_id, destination_place_id, travel_mode,
								 directionsService, directionsDisplay) {
		if (!origin_place_id || !destination_place_id) {
			return;
		}
		directionsService.route({
			origin: {'placeId': origin_place_id},
			destination: {'placeId': destination_place_id},
			travelMode: travel_mode
		}, function(response, status) {
			if (status === google.maps.DirectionsStatus.OK) {
				directionsDisplay.setDirections(response);
			} else {
				window.alert('Directions request failed due to ' + status);
			}
		});
	}

}
// callback matriz de distancia 
function callback(response, status) {
	if (status == google.maps.DistanceMatrixStatus.OK) {
		var origins = response.originAddresses;
		var destinations = response.destinationAddresses;
		var outputDiv = $('.modal-content #output');
		var costo = $('#costo');
		var calculo;

		for (var i = 0; i < origins.length; i++) {
			var results = response.rows[i].elements;
			for (var j = 0; j < results.length; j++) {
				var element = results[j];
				var distance = element.distance.text;
				var duration = element.duration.text;
				var from = origins[i];
				var to = destinations[j];
				// ingresar datos al modal 
				outputDiv.empty().html('<i class="material-icons ico">directions_car</i>'+ 'travel '+ distance + '<br>'+ '<i class="material-icons ico">timer</i>' +'in ' + duration);
				// calculo costo carrera 
				calculo = (((element.distance.value*0.20)/200)+0.30).toFixed();
				console.log( calculo);
				costo.empty().html('The value of the trip is: '+'$ ' + calculo + ' usd');
			}
		}
		
		// guardando valor carrera
		guardarStorageCarrera(calculo);
		$('#modal1').modal('open');
	}
}
$(document).ready(function(){
		// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
		$('.modal').modal();
});

function guardarStorageCarrera(a){
	var valor = a;
	localStorage.setItem('valorCarrera', valor);
}