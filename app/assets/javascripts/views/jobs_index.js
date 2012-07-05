Thefrontend.Views.JobsIndex = Backbone.View.extend({

	template: JST['jobs/index'],

	events: {
		'submit #new-job': 'createJob',
		'click .remove-job': 'removeJob',
		'click .update-job': 'updateJob'
	},

	initialize: function() {
		this.collection.on('reset', this.render, this);
	},
  
	render: function() {
		this.$el.html(this.template({
			jobs: this.collection.toJSON()
		}));
		return this;
	},
  
	createJob: function(event) {
		event.preventDefault();

		var attributes = {
		title: $('#new-job-title').val(),
		description: $('#new-job-content').val(),
		keywords: $('#new-job-keywords').val()
		},
		_this = this;

		this.collection.create(attributes, {
			wait: false,
			success: function(instance, model) {
				$('#new-job')[0].reset();
				instance.collection.trigger('reset');
			},
			error: _this.handleError
		});
	},

	removeJob: function(event) {
		event.preventDefault();
		this.collection.get($(event.target).closest('form').attr('id')).destroy();
		this.collection.trigger('reset');
	},

	updateJob: function (event) {
		event.preventDefault();
		
		var id = $(event.target).closest('form').attr('id'),
				form = $('#' + id),
				job = this.collection.get(id);
		
		job.save({
			title: form.find('input[name=title]').val(),
			description: form.find('textarea[name=description]').val(),
			keywords: form.find('textarea[name=keywords]').val()
		}, {
			success: function (model, response) {
				// Do stuff here...
			},
			error: function (model, response) {
				// Handle error here...
			}
		});
	},
  
	handleError: function(job, response) {
		if (response.status == 422) {
			var errors = $.parseJSON(response.responseText).errors;  
			for (var attribute in errors) {
				var messages = errors[attribute];
				for (var i = 0, len = messages.length; i < len; i++) {
					var message = messages[i];
					alert("" + attribute + " " + message);
				}
			}
		}
	}

});