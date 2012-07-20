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
      query: this.options.query
    }));

    // Results loop sub-view
    this.results_loop = new Thefrontend.Views.results_loop({ 
      el: this.$("#searchResults"),
      collection: this.collection
    }).render();

    return this;
  }

});