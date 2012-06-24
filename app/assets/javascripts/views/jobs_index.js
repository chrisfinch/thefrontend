Thefrontend.Views.JobsIndex = Backbone.View.extend({

  template: JST['jobs/index'],
  
  events: {
    'submit #new-job': 'createJob',
    'click .remove-job': 'removeJob'
  },
  
  initialize: function() {
    this.collection.on('reset', this.render, this);
  },
  
  render: function() {
    $(this.el).html(this.template({
      jobs: this.collection
    }));
    return this;
  },
  
  createJob: function(event) {
    event.preventDefault();
    
    var attributes = {
      title: $('#new-job-title').val(),
      content: $('#new-job-content').val()
    }
    
    this.collection.create(attributes, {
      wait: false,
      success: function() {
        $('#new-job')[0].reset();
        this.collection.trigger('reset');
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