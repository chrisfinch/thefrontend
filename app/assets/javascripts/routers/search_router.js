Thefrontend.Routers.search = Backbone.Router.extend({

	routes: {
		'search/:query': 'search'
	},
  
	initialize: function() {
		this.jobs = new Thefrontend.Collections.Jobs();
		this.jobs.fetch();		
	},

	search: function (query) {
		this.searchView = new Thefrontend.Views.jobs_results({
			collection: this.jobs,
			query: query
		});
		RegionManager.show(this.searchView);			
	},

	index: function(test) {
		var whoView = new Thefrontend.Views.who();
		$('#who').html(whoView.render().el);
	}

});