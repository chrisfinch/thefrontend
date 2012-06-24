window.Thefrontend = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	init: function() {
		
		console.log('test init', typeof Thefrontend.Routers.Jobs);

		new Thefrontend.Routers.Jobs();
		Backbone.history.start();

  	}
};

$(document).ready(function(){
	Thefrontend.init();
});