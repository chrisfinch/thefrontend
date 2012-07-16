Thefrontend.Routers.static = Backbone.Router.extend({

	routes: {
		'who/:test': 'index',

	},
  
	initialize: function() {
		this.who = new Thefrontend.Views.who('#who');
	},
  
	index: function(test) {
		
			console.log(test);

		var whoView = new Thefrontend.Views.who();
		$('#who').html(whoView.render().el);
	}

});