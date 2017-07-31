$(document).ready(function(){
	
	var container = document.querySelector('#contenedor-ppal');
	var msnry = new Masonry( container, {
		  // options
		  itemSelector: '.thumbnail'
		});


	data.forEach(function(tarjeta){
		$('#contenedor-ppal').append('<a href="#" data-toggle="modal" data-target="#myModal"><div class="thumbnail"><div class="contenedor-tarjeta"><img src="dist/img/'+tarjeta.image_url+'" alt="foto1" class="img-rounded" ><div class="caption"><div class="t1-descrip"><span id="title"><b>'+tarjeta.title+'</b></span><p id="description">'+tarjeta.description+'</p></div><div class="mg text-right"><span><i class="fa fa-thumb-tack" aria-hidden="true">36,6k</i><i class="fa fa-check" aria-hidden="true">6</i></span></div><div class="foto-user"><img src="dist/img/foto.jpg" alt="" id="image_url" class="img-circle"></div><div class="userdata"><span id="username"><b>'+tarjeta.username+'</b></span><br><span id="hashtag">#'+tarjeta.hashtag+'</span></div></div></div></a>')
	});









		


});