Thefrontend.Views.home = Backbone.View.extend({
	
	template: JST['home/home'],

	/*
	 * Initialize with the template-id
	 */
	initialize: function() {
	
	},

	/*
	 * Get the template content and render it into a new div-element
	 */
	render: function() {
		$(this.el).html(this.template());
		return this;
	}
});