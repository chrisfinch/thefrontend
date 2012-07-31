window.Thefrontend = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	init: function() {

		Thefrontend.jobsRouter = new Thefrontend.Routers.Jobs();
		Thefrontend.searchRouter = new Thefrontend.Routers.search();	
		Thefrontend.staticRouter = new Thefrontend.Routers.static();
		Thefrontend.auth.init();
		
		Backbone.history.start();
  }
};

$(document).ready(function(){
	Thefrontend.init();
});