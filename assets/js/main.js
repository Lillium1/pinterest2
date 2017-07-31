$(document).ready(function(){
	//side nav bar
	$('.button-collapse').sideNav({
		menuWidth: 170,
		edge: 'left',
		closeOnClick: true,
		draggable: true
	})

	var elem = document.querySelector('#contenedor-ppal');
	var msnry = new Masonry( elem, {
	  // options
	  itemSelector: '.thumbnail',
	  columnWidth: 200
	});
});