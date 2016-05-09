'use strict';

$( document ).ready( function() {

	$( '.open-popup-link' ).magnificPopup( {
		type: 'inline',
		midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
		fixedContentPos: false
	} );
} );

$( function() {
	// init Isotope
	var $container = $( '.isotope' ).isotope( {
		itemSelector: '.item',
		layoutMode: 'packery'
	} );
	// filter items on button click
	$( '.filter-button-group' ).on( 'click', 'a', function() {
		var filterValue = $( this ).attr( 'data-filter' );
		$container.isotope( {
			filter: filterValue
		} );
	} );

} );