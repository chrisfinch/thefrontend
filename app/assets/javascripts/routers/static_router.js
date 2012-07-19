Thefrontend.Routers.static = Backbone.Router.extend({

	routes: {
		'': 'home',
		'who': 'who',
		'what': 'what',
		'why': 'why',
	},
  
	initialize: function() {
		this.who = new Thefrontend.Views.who('#who');
	},
  
	who: function() {
		if (!this.homeView) {
			this.home();
		}
		this.whoView = new Thefrontend.Views.who();
		$('#homeInfoPanel').html(this.whoView.render().el);
	},

	why: function() {
		if (!this.homeView) {
			this.home();
		}
		this.whyView = new Thefrontend.Views.why();
		$('#homeInfoPanel').html(this.whyView.render().el);
	},

	what: function() {
		if (!this.homeView) {
			this.home();
		}
		this.whatView = new Thefrontend.Views.what();
		$('#homeInfoPanel').html(this.whatView.render().el);
	},	

	home: function(test) {
		this.homeView = new Thefrontend.Views.home();
		RegionManager.show(this.homeView);
	},

	index: function(test) {
		var whoView = new Thefrontend.Views.who();
		$('#who').html(whoView.render().el);
	}

});