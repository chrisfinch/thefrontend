Thefrontend.Views.who = Backbone.View.extend({
	
	template: JST['static/who'],

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