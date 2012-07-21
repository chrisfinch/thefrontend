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
		this.whoView = new Thefrontend.Views.who({
			el: '#homeInfoPanel'
		});
		this.homeView.$el.find('#homeInfoButtons a').removeClass('active');
		this.homeView.$el.find('.who').addClass('active');
		this.whoView.render();
	},

	why: function() {
		if (!this.homeView) {
			this.home();
		}
		this.whyView = new Thefrontend.Views.why({
			el: '#homeInfoPanel'
		});
		this.homeView.$el.find('#homeInfoButtons a').removeClass('active');
		this.homeView.$el.find('.why').addClass('active');		
		this.whyView.render();
	},

	what: function() {
		if (!this.homeView) {
			this.home();
		}
		this.whatView = new Thefrontend.Views.what({
			el: '#homeInfoPanel'
		});
		this.homeView.$el.find('#homeInfoButtons a').removeClass('active');
		this.homeView.$el.find('.what').addClass('active');		
		this.whatView.render();
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