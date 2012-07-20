Thefrontend.Views.job = Backbone.View.extend({

  template: JST['jobs/job'],
  
  // events: {
  //   'submit #new-job': 'createJob',
  //   'click .remove-job': 'removeJob'
  // },
  
  initialize: function() {
    this.collection.on('reset', this.render, this);
  },
  
  render: function() {
    if (this.collection.get(this.options.jobId)) { // fix for this? due to reet call on collection?
      $(this.el).html(this.template({
        job: this.collection.get(this.options.jobId).toJSON()
      }));
    return this;
    }
    
  }

});