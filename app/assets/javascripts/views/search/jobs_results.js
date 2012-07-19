Thefrontend.Views.jobs_results = Backbone.View.extend({

  template: JST['search/jobs_results'],
  
  // events: {
  //   'submit #new-job': 'createJob',
  //   'click .remove-job': 'removeJob'
  // },
  
  initialize: function() {
    this.collection.on('reset', this.render, this);
  },
  
  render: function() {
    $(this.el).html(this.template({
      jobs: this.collection,
      query: this.options.query
    }));
    return this;
  }

});