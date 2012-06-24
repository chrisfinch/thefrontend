window.Thefrontend = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	init: function() {

		new Thefrontend.Routers.Jobs();
		Backbone.history.start();

  	}
};

$(document).ready(function(){
	Thefrontend.init();
});