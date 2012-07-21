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

	onShow: function () {
		console.log('inshow')
		// Results loop sub-view
		this.sign_in = new Thefrontend.Views.sign_in({ 
			el: this.$("#menuBar ul")
		}).render();
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
					Thefrontend.searchRouter.navigate('search/'+$e.val(), {trigger: true});
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