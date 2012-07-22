Thefrontend.Routers.Jobs = Backbone.Router.extend({

	routes: {
		'jobs/add': 'add',
		'jobs/:jobId': 'job'
	},
  
	initialize: function() {
		this.jobs = new Thefrontend.Collections.Jobs();
		this.jobs.fetch();
	},
  
	job: function (jobId) {
		var jobView = new Thefrontend.Views.job({
			collection: this.jobs,
			jobId: jobId
		});
		RegionManager.show(jobView);
	},

	add: function () {
		var addJobView = new Thefrontend.Views.job_add({
			collection: this.jobs
		});
		RegionManager.show(addJobView);	
	},

	index: function() {
		var jobsView = new Thefrontend.Views.job({
			collection: this.jobs
		});
		RegionManager.show(jobsView);	
	}

});