window.Thefrontend = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	init: function() {

		new Thefrontend.Routers.Jobs();
		new Thefrontend.Routers.static();		
		Backbone.history.start();

  	}
};

$(document).ready(function(){
	Thefrontend.init();
});