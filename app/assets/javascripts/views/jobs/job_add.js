Thefrontend.Views.job_add = Backbone.View.extend({

  template: JST['jobs/add'],
  
  events: {
    'submit #addJobForm': 'createJob',
    'click .remove-job': 'removeJob'
  },
  
  initialize: function() {
    this.collection.on('reset', this.render, this);
  },
  
  render: function() {
    // apparently this function isn't ever even being called???
    $(this.el).html(this.template({
      jobs: this.collection
    }));
    return this;
  },
  
  createJob: function(event) {
    event.preventDefault();
    
    var f = this.$el.find('#addJobForm');

    var attributes = {
      title: f.find('#title').val(),
      company: f.find('#company').val(),
      salary: f.find('#salary').val(),
      description: f.find('#description').val(),
      type: f.find('#type').val()
    }
    
    this.collection.create(attributes, {
      wait: false,
      success: function() {
        console.log('success');
        f[0].reset();
        //this.collection.trigger('reset');
      },
      error: this.handleError
    });
  },

  removeJob: function(event) {
    event.preventDefault();
    console.dir(event);
    this.collection.get(event.target.id).destroy();
    this.collection.trigger('reset');
  },
  
  handleError: function(job, response) {
    if (response.status == 422) {
      var errors = $.parseJSON(response.responseText).errors;  
      for (attribute in errors) {
        var messages = errors[attribute];
        for (var i = 0, len = messages.length; i < len; i++) {
          message = messages[i];
          alert("" + attribute + " " + message);
        }
      }
    }
  }

});