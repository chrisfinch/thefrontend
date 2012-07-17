Thefrontend.Routers.static = Backbone.Router.extend({

	routes: {
		'': 'home',
		'who': 'who',
	},
  
	initialize: function() {
		this.who = new Thefrontend.Views.who('#who');
	},
  
	who: function(test) {
		var whoView = new Thefrontend.Views.who();
		$('#homeInfoPanel').html(whoView.render().el);
	},

	home: function(test) {
		var homeView = new Thefrontend.Views.home();
		$('#wrapper').html(homeView.render().el);
	},

	index: function(test) {
		var whoView = new Thefrontend.Views.who();
		$('#who').html(whoView.render().el);
	}

});