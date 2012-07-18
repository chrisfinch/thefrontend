Thefrontend.Views.home = Backbone.View.extend({
	
	template: JST['home/home'],

	events: {
		"focus #search"	: "searchFieldEvents",
		"blur #search"	: "searchFieldEvents",		
		"keyup #search"	: "searchFieldEvents"
	},

	/*
	 * Initialize with the template-id
	 */
	initialize: function() {
		// nada..
	},

	searchFieldEvents: function (event) {
		var $e = $(event.target);
		switch (event.type) {
			case 'focusin':
				$e.val('');
				break;
			case 'focusout':
				if ($e.val() == '') {
					$e.val($e.data('val'));
				}
				break;	
			case 'keyup':
				if (event.keyCode == 13) {
					console.log('enter key pressed.');
					// submit!
				}
				break;
		}
	},

	/*
	 * Get the template content and render it into a new div-element
	 */
	render: function() {
		$(this.el).html(this.template());
		return this;
	}
});