Thefrontend.Routers.Jobs = Backbone.Router.extend({

	routes: {
		'jobs': 'index'
	},
  
	initialize: function() {
		this.jobs = new Thefrontend.Collections.Jobs();
		this.jobs.fetch();
	},
  
	index: function() {
		var jobsView = new Thefrontend.Views.JobsIndex({
			collection: this.jobs
		});
		$('#jobs').html(jobsView.render().el);
	}

});