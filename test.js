
(function( window, undefined ) {
	
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context );
	},
	
	jQuery.fn = jQuery.prototype = {
		// The current version of jQuery being used
		jquery: 'core_version',
	
		constructor: jQuery,
		init: function( selector, context ) {
			return this;		
		},	
	};

// Give the init function the jQuery prototype for later instantiation
	jQuery.prototype.init.prototype = jQuery.prototype;

    jQuery.prototype.test=function(){
		
		alert(1);
	}


	window.jQuery = window.$ = jQuery;


	return jQuery;

})( window );
